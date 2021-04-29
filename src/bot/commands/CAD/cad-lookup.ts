import { Command } from "discord-akairo";

export default class extends Command {
    public constructor() {
        super('cad-lookup', {
            aliases: ["cad-lookup"],
            args: [
                {
                    id: "target",
                    match: "none",
                    prompt: {
                        start: "Who do you want to look up?",
                        retry: "Invalid! "
                    }
                }
            ]
        })
    }
}
