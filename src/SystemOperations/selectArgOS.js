import { getEolOS } from "./Operations/getEolOS.js";
import { getCpusOS } from "./Operations/getCpusOS.js";
import { getUsernameOS } from "./Operations/getUsernameOS.js";
import { getHomedirOS } from "./Operations/getHomedirOS.js";
import { getArchitectureOS } from "./Operations/getArchitectureOS.js";

export const selectArgOS = async(input) => {
    const params = input.trim().split(' ').slice(1)[0]

    switch (params) {
        case '--EOL': {
            await getEolOS()
            break
        }
        case '--cpus': {
            await getCpusOS()
            break
        }
        case '--homedir': {
            await getHomedirOS()
            break
        }
        case '--username': {
            await getUsernameOS()
            break
        }
        case '--architecture': {
            await getArchitectureOS()
            break
        }
        default: {
            console.log('Invalid input')
        }
    }
}