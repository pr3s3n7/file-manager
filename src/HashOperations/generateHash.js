import { createHash } from 'node:crypto'
import { getDestinationResultPath } from "../utils/getDestinationResultPath.js";

export const generateHash = async(path, currentlyDirectory) => {
    const resultPath = await getDestinationResultPath(path, currentlyDirectory)

    return console.log(createHash('sha256').update(resultPath).digest('hex'))
}