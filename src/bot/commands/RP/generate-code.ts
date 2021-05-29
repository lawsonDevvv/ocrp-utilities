import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class extends Command {
    public constructor() {
        super("generate-code", {
            aliases: ["code", "rp-code"],
            userPermissions(message: Message) {
                if (message.member.roles.cache.has("846154380951814205")) {
                    return null;
                } else {
                    return 'RP Creator';
                }
            },
        })
    }

    public exec(message: Message) {
        function getRandomInt(min, max) : number{
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }

        message.channel.send(getRandomInt(1111, 9999));
    }
}