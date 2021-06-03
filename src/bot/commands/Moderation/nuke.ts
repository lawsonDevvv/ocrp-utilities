import { Command } from "discord-akairo";
import { Collection } from "discord.js";
import { TextChannel } from "discord.js";
import { Message } from "discord.js";

export default class extends Command {
    public constructor() {
        super("nuke", {
            aliases: ["nuke", "cybernuke"],
            userPermissions: (message: Message) => {
                if (
                    message.member.roles.cache.has('812818993391992871') || // Senior Admin
                    message.member.roles.cache.has('804897153594949642') || // Lead Admin
                    message.member.roles.cache.has('813217818551124008') || // Owner (J)
                    message.member.roles.cache.has('818204751597797457')    // Co-Owner (Outlaw)
                ) {
                    return null;
                }
                return 'Moderator';
            },
            args: [
                {
                    id: "channel",
                    type: "textChannel",
                    prompt: {
                        start: "Gimme a channel to nuke.",
                        retry: "Gimme an ACTUAL channel to nuke.",
                        ended: "You're bad at this. Run the command again.",
                        retries: 2,
                    }
                },
                {
                    id: "reason",
                    type: "string",
                    default: `No reason provided. `,
                    match: "restContent",
                }
            ]
        })
    }

    public exec(message: Message, { channel, reason }: { channel: TextChannel, reason: string }) {
        const yesResponses: string[] = ["y", "ye", "yes", "yeah", "yea", "ya", "just nuke it bitch"];

        message.util?.send(`Danger, Will Robinson, Danger! This action is **irreversable**! I hope you know what you're doing!\n\nJust to be clear that you know what you're doing: you want to nuke ${channel} for reason: \`${reason}\`?`).then(() => {
            const collector = message.channel.awaitMessages((m: Message) => m.author.id === message.author.id, {
                time: 120000,
                max: 1,
                errors: ['time']
            }).then((collected: Collection<string, Message>) => {
                if (yesResponses.includes(collected.first().content.toLowerCase())) {
                    message.channel.send("Alrighty then. I **really** hope you know what you're doing.").then(() => {
                        const deletedLogChat: TextChannel = (message.guild.channels.cache.get("843246256843259934") as TextChannel);

                        this.client.setTimeout(() => {
                            deletedLogChat.send(`${message.author} nuked \`#${channel.name}\` with reason: ${reason}`);

                            channel.clone().then((c) => {
                                c.setPosition(channel.position)

                                c.send(
                                    null, 
                                    {
                                        files: [
                                            "https://i.pinimg.com/originals/6c/48/5e/6c485efad8b910e5289fc7968ea1d22f.gif"
                                        ]
                                    }
                                );
                                
                                channel.delete(`${reason} || Actioned by ${message.author.tag}.`);
                            });
                        }, 5000);
                    })
                } else {
                    message.channel.send("Okay then...\n\n**Cancelling!**");
                }
            }).catch(() => {
                message.channel.send("Be faster.\n\n**Cancelling!**")
            });
        });
    }
}