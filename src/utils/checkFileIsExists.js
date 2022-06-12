import { promises } from "fs";
import { sendErrorMessage } from "./sendMessage.js";

export const checkFileIsExists = async(path, destination, func) => {
    return await promises.access(path)
        .then(async() => await promises.access(destination)
            .then(async() => await sendErrorMessage())
            .catch(async() => {
                await func(path, destination)
            })).catch(async() => {
            await sendErrorMessage()
        })
}