import { promises } from 'fs'
import { sendErrorMessage } from "../utils/sendMessage.js";
import { getDestinationResultPath } from "../utils/getDestinationResultPath.js";

export const rm = async(path, currentlyDirectory) => {
    const resultPath = await getDestinationResultPath(path, currentlyDirectory);

    return promises.unlink(resultPath)
        .then(() => console.log('Successfully removed file'))
        .catch(async () => await sendErrorMessage())
}