import { getPathsToFiles } from "../utils/getPathsToFiles.js";
import {createReadStream, createWriteStream} from "fs";
import { createBrotliDecompress } from "node:zlib";
import { sendErrorMessage } from "../utils/sendMessage.js";

export const decompressFile = async(input, currentlyDirectory) => {
    let { path, destination } = await getPathsToFiles(input, currentlyDirectory)

    const read = createReadStream(path)
    const write = createWriteStream(destination)
    const unzip = createBrotliDecompress()

    let stream = read.pipe(unzip).pipe(write)

    stream.on('error', async() => await sendErrorMessage())
    stream.on('finish', async() => console.log('Successfully decompressed'))
}