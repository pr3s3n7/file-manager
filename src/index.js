

const args = process.argv.slice(2);

async function start() {
    args.map((arg) => {
        if (arg.startsWith('--username=')) {
            const username = arg.split('=');
            console.log(`Welcome to the File Manager, ${username[1]}!`);
        }
    })
}

start()