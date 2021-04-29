import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";
import { Message } from "discord.js";
import { SetCopyrightFooter } from "../../Auto/SetCopyrightFooter"

export default class extends Command {
    public constructor() {
        super("ping", {
            aliases: ["ping", "p"]
        });
    }

    public exec(message: Message) {
        const embed = new MessageEmbed()
            .setDescription(`Pong!\n\n\`\`\`API Latency: ${Math.round(this.client.ws.ping)}.\`\`\``)
            .setTitle("Pong!")

        message.util?.send(embed);
    }

        
}