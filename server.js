const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT_NUMBER || 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);
