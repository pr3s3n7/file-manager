import { getPathsToFiles } from "../utils/getPathsToFiles.js";
import {createReadStream, createWriteStream, promises} from "fs"
import { sendErrorMessage } from "../utils/sendMessage.js";
import { checkIsFile } from "../utils/checkIsFile.js";
import { join, sep } from "path";

export const mv = async(input, currentlyDirectory) => {
    let { path, destination } = await getPathsToFiles(input, currentlyDirectory)

    await move(path, destination)
}

const move = async(path, destination) => {
    let filename

    path.split(sep).length !== 0 ? filename = path.split(sep).pop() : filename = path

    if (await checkIsFile(path) && !await checkIsFile(destination)) {
        const oldPath = createReadStream(path)
        const newPath = createWriteStream(join(destination, filename))

        oldPath.on('error', async() => await sendErrorMessage())
        newPath.on('error', async() => await sendErrorMessage())

        oldPath.pipe(newPath)

        return await promises.rm(path)
            .then(() => console.log('Successfully moved file'))
            .catch(async () => await sendErrorMessage())
    } else {
        await sendErrorMessage()
    }
}