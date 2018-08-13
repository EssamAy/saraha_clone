const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Setting middelwares
app.use(bodyParser.json());
app.use(cors());

// Setting the static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
    console.log('Server listenig on port 5000');
})

