import { MessageEmbed } from "discord.js";

export const SetCopyrightFooter = (embed: MessageEmbed): void | Promise<void> => {
    embed.setFooter("Property of PossiblySebo#0001, Licensed to Aspect Designs, Copyright 2021, all rights reserved.")
}
