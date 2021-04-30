import { Listener } from "discord-akairo";

import * as chalk from "chalk";
import { TriggerEvent } from "../Auto/TriggerEvent";
import { MessageEmbed } from "discord.js";

export default class ReadyListener extends Listener {
    public constructor() {
        super("ready", {
            category: "client",
            emitter: "client",
            event: "ready"
        });
    }

    public exec() {
        TriggerEvent("CLIENT", `Event "ready" triggered at ${new Date().toLocaleString()}`);

        const activities_list = [
            "over Aspect.", 
            "Lawson sleep.",
            "Jason sleep.", 
            "Joe sleep.",
            "ad!ban @PossiblySebo Breaking me too much."
        ]; 
        
        
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
            this.client.user.setActivity(activities_list[index], {type: "WATCHING"}); 
        }, 10000);
    } 
}