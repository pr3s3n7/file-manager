import { up } from './up.js'
import { join, sep } from "path";
import { checkIsFile } from '../utils/checkIsFile.js'
import { promises } from 'fs'

export const cd = async(destination, currentlyDirectory) => {
    destination = destination.split(' ')[1]

    if (destination === '..') return up(currentlyDirectory)

    if (destination.slice(destination.length - 1) === '/' || destination.slice(destination.length - 1) === sep) {
        destination = destination.slice(0, -1)
    }

    let resultPath = join(currentlyDirectory, destination)

    return await promises.access(resultPath)
        .then(async() => {
            let isFile = await checkIsFile(resultPath)
            return isFile ? currentlyDirectory : resultPath
        }).catch(() => {
            console.log('Invalid Path')
            return currentlyDirectory
        })
}