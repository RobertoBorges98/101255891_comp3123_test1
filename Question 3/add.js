import fs from 'fs';

if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");
// Create 10 log files
// Create filename in the given format
for(let i = 0; i < 10; i++) {
    const filename = `log${i}.txt`;
    fs.writeFile(filename, 'some text', (err) => {
        //throw an error if there are any problems
        if (err) {
            throw err;
        }
    });
    console.log(filename);
}