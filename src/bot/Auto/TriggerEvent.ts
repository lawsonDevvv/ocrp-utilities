import * as c from "chalk";

export const TriggerEvent = (type: string, message: string) => {
    console.log(`[${c.blue(type.toUpperCase())}] ${c.bold.white(message)}`)
}