const fs = require('fs');

const storiesDir = 'stories';

fs.rmdir(storiesDir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
});

const scriptsDir = 'scripts';

fs.rmdir(scriptsDir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
});