const fs = require('fs');

const filePath = "output.txt";
const contentToAppend = 'More content here.\n';

fs.appendFile(filePath, contentToAppend, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Content successfully appended to', filePath);
    }
});
