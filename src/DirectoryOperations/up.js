import { sep } from 'path'

export const up = async(currentlyDirectory) => {
    let arrayOfDirectory = currentlyDirectory.trim().split(sep)
    arrayOfDirectory.pop()
    if (arrayOfDirectory.length <= 1) {
        return `${arrayOfDirectory}${sep}`
    }
    return arrayOfDirectory.join(sep)
}