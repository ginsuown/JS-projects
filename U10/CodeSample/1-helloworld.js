const express = require('express');

const app = express();

app.use((req, res) => 
            res.send('Hello My World!')
            // res.send('<h1>Hello World')
        );

app.listen(8888, () => 
                    console.log('Listening on port 3000!')
                );
