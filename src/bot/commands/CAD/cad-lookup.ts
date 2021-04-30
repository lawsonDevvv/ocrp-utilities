import { Command } from "discord-akairo";
import { Message } from "discord.js";
import request = require("request");

export default class extends Command {
    public constructor() {
        super('cad-lookup', {
            aliases: ["cad-lookup"],
            args: [
                {
                    id: "firstName",
                    prompt: {
                        start: "Please enter the target's first name.",
                        retry: "Invalid! Try again."
                    }
                },
                {
                    id: "lastName",
                    type: "string",
                    prompt: {
                        start: "Please enter the target's last name.",
                        retry: "Invalid! Try again."
                    }
                }
            ],
        })
    }

    public exec(message: Message, { firstName, lastName }: { firstName: string, lastName: string }) {
        const yesResponses = ['y', 'ye', 'yes', 'yess', 'yees', 'yyes', 'yesyes']

        request("")
    }
}
