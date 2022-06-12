import { homedir } from 'os'

export const getHomedirOS = async() => {
    return console.log(homedir())
}