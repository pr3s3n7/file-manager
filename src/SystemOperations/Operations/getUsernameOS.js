import { userInfo } from 'os'

export const getUsernameOS = async() => {
    return console.log(userInfo().username)
}