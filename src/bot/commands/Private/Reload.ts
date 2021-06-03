import { Command } from "discord-akairo";
import { Message } from "discord.js";
import BotClient from "../../../struct/BotClient";

type ListenerTypes = "command" | "inhibitor" | "listener";

export default class extends Command {
    public constructor() {
        super("reload", {
            aliases: ["reload", "re"],
            args: [
                {
                    id: "thing",
                    type: "string",
                    prompt: {
                        start: "Wot command/listener/inhibitor/i dont have time for your bullshit..",
                        retry: "WHAT FUCKING COMMAND/inhibitor/WHATEVER THE FUCK..",
                        ended: "YOU'RE FUCKING ASS.",
                        cancel: "K den.",
                        retries: 3,
                        cancelWord: "cancel",
                    },
                },
                {
                    id: "type",
                    type: "string",
                    default: "command"
                },
            ],
            ownerOnly: true,
        })
    }

    public exec(message: Message, { thing, type }: { thing: string, type: ListenerTypes }) {
        message.util?.send("Gimme a second...").then(() => {
            if (type === "command") {
                (message.client as BotClient).commandHandler.reload(thing);
                message.util.send(":thumbsup:");
            }

            if (type === "listener") {
                (message.client as BotClient).listenerHandler.reload(thing);
                message.util.send(":thumbsup:");
            }

            if (type === "inhibitor") {
                // No inhibitor handler yet.
                message.util.send("No.");
            }
        });
    }
}