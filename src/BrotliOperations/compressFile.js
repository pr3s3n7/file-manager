import { createWriteStream, createReadStream } from "fs";
import { createBrotliCompress } from 'node:zlib'
import { getPathsToFiles } from "../utils/getPathsToFiles.js";
import { sendErrorMessage } from "../utils/sendMessage.js";

export const compressFile = async(input, currentlyDirectory) => {
    let { path, destination } = await getPathsToFiles(input, currentlyDirectory)

    const read = createReadStream(path)
    const write = createWriteStream(destination)
    const zip = createBrotliCompress()

    let stream = read.pipe(zip).pipe(write)

    stream.on('error', async() => await sendErrorMessage())
    stream.on('finish', async() => console.log('Successfully decompressed'))
}