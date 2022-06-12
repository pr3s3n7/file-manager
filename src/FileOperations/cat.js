import { createReadStream } from 'fs'
import { promises } from 'fs'
import { checkIsFile } from "../utils/checkIsFile.js";
import { getDestinationResultPath } from "../utils/getDestinationResultPath.js";
import { sendErrorMessage } from '../utils/sendMessage.js'

export const cat = async(path, currentlyDirectory) => {
    let resultPath = await getDestinationResultPath(path, currentlyDirectory)

    return await promises.access(resultPath)
        .then(async () => {
            let isFile = await checkIsFile(resultPath)
            if (isFile) {
                const read = createReadStream(resultPath)
                read.on('data', (data) => {
                    process.stdout.write(data.toString())
                })
            }
        }).catch(async() => await sendErrorMessage())
}