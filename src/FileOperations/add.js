import { getDestinationResultPath } from "../utils/getDestinationResultPath.js";
import { createWriteStream, promises } from 'fs'
import { sendErrorMessage } from "../utils/sendMessage.js";

export const add = async(path, currentlyDirectory) => {
    let resultPath = await getDestinationResultPath(path, currentlyDirectory)

    return await promises.access(resultPath)
        .then(async() => await sendErrorMessage())
        .catch(async() => createWriteStream(resultPath))
}