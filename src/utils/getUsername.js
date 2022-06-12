const args = process.argv;

export const getUsername = async() => {
    let username
    args.map((arg) => {
        if (arg.startsWith('--username')) {
            username = arg.split('=')[1]
        }
    })
    return username
}