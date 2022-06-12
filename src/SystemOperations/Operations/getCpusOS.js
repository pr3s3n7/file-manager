import { cpus } from 'os'

export const getCpusOS = async() => {
    return console.log(cpus())
}