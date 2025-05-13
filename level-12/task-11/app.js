const fs = require('fs');
const filePath = 'text.txt';

fs.watch(filePath, (eventType) => {
    if (eventType === 'change') {
      console.log(`The file "${filePath}" was changed.`);
    } else {
      console.log(`The file was renamed or deleted.`);
    }
  });

console.log(`Watching for changes on ${filePath}...`);
