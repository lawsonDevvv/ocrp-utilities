import BotClient from "../struct/BotClient";
import { TOKEN } from "./Config/Config";

const client: BotClient = new BotClient({
    prefix: ".",
    token: TOKEN
});

client.login(TOKEN);
