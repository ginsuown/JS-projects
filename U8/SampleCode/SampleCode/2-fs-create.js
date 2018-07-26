const fs = require('fs');

// async write
fs.writeFile('hello.txt', 'hello from Node!\nI am here\nAnother line', function(err) {
        if(err) {
            console.log('-------');
            console.log('Error writing to file.');
            console.log('-------');
        } else {
            console.log('-------');
            console.log('writing to file is successful.');
            console.log('-------');
        }
    }
);

// async write with __dirname
fs.writeFile(__dirname + '/hello1.txt', 'another hello from Node!\nI am here\nAnother line', function(err) {
        if(err) {
            console.log('-------');
            console.log('Error writing to file.');
            console.log('-------');
        } else {
            console.log('-------');
            console.log('writing to file is successful.');
            console.log('-------');
        }
    }
);

// sync write
try {
    fs.writeFileSync(__dirname + '/hello2.txt', 'hello from Node!');
    console.log('-------');
    console.log('sync write successful');
    console.log('-------');
} catch(err) {
    console.log('-------');
    console.error('Error writing file.');
    console.error(err);
    console.log('-------');
}