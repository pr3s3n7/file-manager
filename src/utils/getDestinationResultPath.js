import {join} from "path";

export const getDestinationResultPath = async(destination, currentlyDirectory) => {
    destination = destination.trim().split(' ')[1]
    let resultPath

    if (destination.slice(1, 2) === ':') {
        resultPath = destination
    } else {
        resultPath = join(currentlyDirectory, destination)
    }

    return resultPath;
}