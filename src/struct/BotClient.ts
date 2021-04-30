import { AkairoClient, Command, CommandHandler, ListenerHandler } from "discord-akairo";
import { join } from 'path';
import { PREFIX, OWNERS } from "../bot/Config/Config";

interface BotOptions {
    token?: string;
    prefix?: string;
}

export default class BotClient extends AkairoClient {
    config: BotOptions;
    commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "..", "bot", "commands"),
        commandUtil: true,
        allowMention: true,
        blockBots: true,
        blockClient: true,
        handleEdits: true,
        commandUtilLifetime: 3e5,
        prefix: PREFIX,
        automateCategories: true,
    });


    listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "..", "bot", "listeners"),
    });


    public constructor(config: BotOptions) {
        super({
            ownerID: OWNERS
        }, {
            disableMentions: "everyone"
        })

        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
}