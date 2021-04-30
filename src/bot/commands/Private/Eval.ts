import { Command } from "discord-akairo";
import { Message } from "discord.js";

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

    public exec(message: Message, { code }: { code: string }) {
        try {
            const evaled = eval(code);

            message.util.reply(`${evaled}`)
        } catch (err) {
            message.util.reply(null, {embed: {description: `\`\`\`${err}\`\`\``}})
        }
    }
}