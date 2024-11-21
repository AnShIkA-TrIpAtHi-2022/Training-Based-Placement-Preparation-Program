const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
})
app.get('/about',(req,res) => {
    res.send('This is about page');
})
app.get('/cat',(req,res) => {
    res.send('This is cat page');
})
app.get('/*',(req,res) => {
    res.send('404 Not Found');
})

//create read update and delete CRUD



app.listen(4000); //3000 to 8000