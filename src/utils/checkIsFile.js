import { promises } from 'fs'

export const checkIsFile = async(path) => {
    try {
        const stat = await promises.lstat(path)
        return stat.isFile()
    } catch {
        return false
    }
}