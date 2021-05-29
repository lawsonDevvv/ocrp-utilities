import { Listener } from "discord-akairo";
import { TextChannel } from "discord.js";
import { Message } from "discord.js";
import { resolve } from "node:path";
import request = require("request");
import { TriggerEvent } from "../Auto/TriggerEvent";

export default class extends Listener {
    public constructor() {
        super("message", {
            category: "client",
            emitter: "client",
            event: "message"
        });
    }

    public exec(message: Message): Promise<Message> {
        if (message.author.bot) return;
        TriggerEvent(
            "MESSAGE",
            `\n|__FROM: ${message.author.tag}(${message.author.id})
|__CONTENT: ${message.content || "[THIS IS MOST LIKELY AN EMBED]"}
|__CHANNEL: ${(message.guild) ? `${(message.channel as TextChannel).name} (${message.channel.id})` : "DM Channel"}
|__SENT AT: ${new Date().toLocaleString() + " EST".toUpperCase()}
            `
        );
        return new Promise((resolve, reject) => {
            resolve(message)
        })
    }
}