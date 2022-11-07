const express = require('express'),
    app = express();
require('dotenv').config()
const cors = require('cors');
const router = require('./router')
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(router)

app.listen(port, () =>{
    console.log(`Example app is running on port ${port}`);
})
