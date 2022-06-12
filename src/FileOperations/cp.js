import { getPathsToFiles } from "../utils/getPathsToFiles.js";
import { sendErrorMessage } from '../utils/sendMessage.js'
import { promises } from 'fs'
import { checkFileIsExists } from '../utils/checkFileIsExists.js'

export const cp = async(input, currentlyDirectory) => {
    let { path, destination } = await getPathsToFiles(input, currentlyDirectory)

    return await checkFileIsExists(path, destination, copy)
}

const copy = async(path, destination) => {
    await promises.copyFile(path, destination)
        .then(() => console.log('Successfully copyed'))
        .catch(async() => await sendErrorMessage())
}