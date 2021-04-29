import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";
import { Message } from "discord.js";

import * as request from "request";

export default class extends Command {
    public constructor() {
        super("djsdocs", {
            aliases: ["djsdocs"],
            args: [
                {
                    id: "query",
                    type: "string",
                    prompt: {
                        start: "What do you want to search?",
                        retries: 3,
                        retry: "When you ask me so much, I can't not help you~\n\nWhat do you want to search?"
                    }
                },
                {
                    id: "src",
                    type: "string",
                    flag: ["--src="],
                    default: "master"
                }
            ],
            ownerOnly: true
        })
    }

    public exec(message: Message, { query, src }: { query: string, src: string }) {
        request(`https://djsdocs.sorta.moe/v2/embed?src=${src}&q=${query}`, { json: true }, (err, res, body) => {
            if (!body) {
                return message.util.reply("When you ask me so much, I can't not help you~\n\nWhat do you want to search?")
            }

            return message.channel.send(new MessageEmbed(body));
        });
    }
}