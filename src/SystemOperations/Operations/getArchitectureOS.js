import { arch } from 'os'

export const getArchitectureOS = async() => {
    return console.log(arch())
}