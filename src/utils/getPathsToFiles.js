import { join } from "path";

export const getPathsToFiles = async(input, currentlyDirectory) => {
    let params = input.trim().split(' ')
    let [path, destination] = params.slice(1, 3)

    path = join(currentlyDirectory, path)
    destination = join(currentlyDirectory, destination)

    return {
        path,
        destination
    }
}