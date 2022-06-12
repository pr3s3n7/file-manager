import { homedir } from 'os'

export const getCurrentlyDirectory = async() => {
    return homedir
}