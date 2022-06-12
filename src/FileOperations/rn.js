import { promises } from 'fs'
import { getPathsToFiles } from "../utils/getPathsToFiles.js";
import { sendErrorMessage } from '../utils/sendMessage.js'
import { checkFileIsExists } from '../utils/checkFileIsExists.js'

export const rn = async(input, currentlyDirectory) => {
    let { path, destination } = await getPathsToFiles(input, currentlyDirectory)

    return await checkFileIsExists(path, destination, rename)
}

const rename = async(path, destination) => {
    await promises.rename(path, destination)
        .then(() => console.log('Successfully renamed'))
        .catch(async() => await sendErrorMessage())
}