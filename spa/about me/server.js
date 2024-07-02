const express = require('express');
const app = express();
const path = require('path')

app.use('/static',express.static(path.resolve(__dirname,"frontend","static")))

app.get('/*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","index.html"));
})

app.listen('3000',()=>{console.log('server is listining at 3000...')})