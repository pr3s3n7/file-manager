export const sendWelcomeMessage = async(username) => {
    console.log(`Welcome to the File Manager, ${username}!`)
}

export const sendGoodbyeMessage = async(username) => {
    console.log(`Thank you for using File Manager, ${username}!`)
}

export const sendCurrentlyDirectory = async(currentlyDirectory) => {
    console.log(`You are currently in ${currentlyDirectory}`)
}

export const sendErrorMessage = async() => {
    console.log('Operation failed')
}