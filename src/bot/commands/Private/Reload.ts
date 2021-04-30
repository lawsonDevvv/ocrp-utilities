import { Command } from "discord-akairo";

export default class extends Command {
    public constructor() {
        super("reload", {
            aliases: ["reload", "re"],
            args: [
                {
                    id: "command",
                    prompt: {
                        retries: 3,
                        cancelWord: "cancel"
                    }
                }
            ]
        })
    }
}