import { cpus } from 'os'

export const getCpusOS = async() => {
    const cpuInfo = cpus()
    const model = cpuInfo[0].model
    console.log(`CPU Count: ${cpuInfo.length}\nCPU Model: ${model}`)
    return cpuInfo.map(cpu => console.log({
        model: cpu.model,
        speed: cpu.speed / 1000 + 'GHz'
    }))
}
