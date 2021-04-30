import { Command } from "discord-akairo";
import { Message } from "discord.js";
import fetch from 'node-fetch';
import { TOKEN } from "../../Config/Config";

export default class EvalCommand extends Command {
    public constructor() {
        super("eval", {
            aliases: ["eval", "runcode"],
            args: [
                {
                    id: "code",
                    type: "string",
                    match: "restContent",
                    prompt: {
                        start: "What code would you like to evaluate?",
                        retries: 3,
                        retry: "What code would you like to evaluate?"
                    }
                }
            ],
            ownerOnly: true
        })
    }

    public async exec(message: Message, { code }: { code: string }) {
        try {
            const evaled = eval(code).toString().replace(`${TOKEN}`, `[NOPE]`);

            const body = {
                files: [{
                    name: 'Eval Output Result',
                    content: `${evaled}`,
                    languageId: 183
                }]
            }

            if (evaled.length <= 2000) {
                message.util.reply(`${evaled}`)
            } else {
                const binLink = await fetch('https://sourceb.in/api/bins', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : "application/json"
                    },
                    body: JSON.stringify(body)
                }).then(res => res.json()).catch((e: Error) => {
                    
                });

                await message.util?.send(`Yeah, so, apparently I can't send the full response, so check your DMs `);
                console.log(binLink)
                console.log(binLink.key)
                return await message.author.send(`https://sourceb.in/${binLink.key}`)
            }
        } catch (err) {
            message.util.reply(null, {embed: {description: `\`\`\`${err}\`\`\``}})
        }
    }
}