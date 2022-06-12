import { readdir } from 'fs'

export const ls = async(currentlyDirectory) => {
    return readdir(currentlyDirectory, {withFileTypes: true}, (error, files) => {
        if (files.length === 0) {
            console.log('The directory is empty.')
        }
        files.forEach(file => {
            console.log(file.name)
        })
    });
}