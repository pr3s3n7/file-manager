import { EOL } from 'os'

export const getEolOS = async() => {
    return console.log(JSON.stringify(EOL));
}