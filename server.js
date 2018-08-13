const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./config');
const mongoose = require('mongoose');

let connectionString = '';
if(config.database.credentials) {
    connectionString = 'mongodb://'+ config.database.username +':'+ config.database.password +'@'+ config.database.host +':'+ config.database.port +'/' + config.database.name;
} else {
    connectionString = 'mongodb://'+ config.database.host +':'+ config.database.port +'/' + config.database.name;
}
mongoose.connect(connectionString);

mongoose.connection.on('connected', ()=>{
    console.log('Connected to: ' + config.database.name);
});
mongoose.connection.on('error', (err)=>{
    console.log('Database Error: ' + err);
});

const app = express();

// Setting middelwares
app.use(bodyParser.json());
app.use(cors());

// Setting the static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.app.port, () => {
    console.log('Server listenig on port: '+ config.app.port);
})

