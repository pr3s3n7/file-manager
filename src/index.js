import readline from 'readline';
import { getUsername } from './utils/getUsername.js'
import { sendWelcomeMessage, sendGoodbyeMessage, sendCurrentlyDirectory } from './utils/sendMessage.js'
import { getCurrentlyDirectory } from './getSystemInfo/getStartDir.js'
import { getInputCommand } from './utils/getInputCommand.js'
import { up } from './DirectoryOperations/up.js'
import { cd } from "./DirectoryOperations/cd.js";
import { ls } from "./DirectoryOperations/ls.js";
import { cat } from "./FileOperations/cat.js";
import { add } from "./FileOperations/add.js";
import { rn } from "./FileOperations/rn.js";
import { cp } from "./FileOperations/cp.js";
import { mv } from "./FileOperations/mv.js";
import { rm } from "./FileOperations/rm.js";
import { selectArgOS } from "./SystemOperations/selectArgOS.js";
import { generateHash } from "./HashOperations/generateHash.js";
import { compressFile } from "./BrotliOperations/compressFile.js";
import { decompressFile } from "./BrotliOperations/decompressFile.js";

const rl = readline.createInterface({
    input: process.stdin
})

async function start() {
    const username = await getUsername()
    await sendWelcomeMessage(username)
    let currentlyDirectory = await getCurrentlyDirectory()
    await sendCurrentlyDirectory(currentlyDirectory)
    rl.on('line', async(input) => {
        const inputCommand = await getInputCommand(input)
        currentlyDirectory = `${currentlyDirectory}`
        switch(inputCommand) {
            case 'up': {
                currentlyDirectory = await up(currentlyDirectory)
                break
            }
            case 'cd': {
                currentlyDirectory = await cd(input, currentlyDirectory)
                break
            }
            case 'ls': {
                await ls(currentlyDirectory)
                break
            }
            case 'cat': {
                await cat(input, currentlyDirectory)
                break
            }
            case 'add': {
                await add(input, currentlyDirectory)
                break
            }
            case 'rn': {
                await rn(input, currentlyDirectory)
                break
            }
            case 'cp': {
                await cp(input, currentlyDirectory)
                break
            }
            case 'mv': {
                await mv(input, currentlyDirectory)
                break
            }
            case 'rm': {
                await rm(input, currentlyDirectory)
                break
            }
            case 'os': {
                await selectArgOS(input)
                break
            }
            case 'hash': {
                await generateHash(input, currentlyDirectory)
                break
            }
            case 'compress': {
                await compressFile(input, currentlyDirectory)
                break
            }
            case 'decompress': {
                await decompressFile(input, currentlyDirectory)
                break
            }
            case '.exit': {
                await sendGoodbyeMessage(username)
                process.exit()
                break
            }
            default: {
                console.log('Invalid input')
            }
        }
        await sendCurrentlyDirectory(currentlyDirectory)
    })
}

start()