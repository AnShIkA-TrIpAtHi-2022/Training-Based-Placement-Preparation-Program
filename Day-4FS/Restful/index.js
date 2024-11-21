const express = require('express');
const app = express();

const users = require('./data/user')

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.get('/users/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res) =>{
    console.log(req.body);
    const {username,password,city} = req.body;
    let x = users[users.length-1].id+1;
    const user=[
        {
            id: x,
            username: username,
            password: password,
            city: city
        }
    ]
    users.push(user[0]);
    res.redirect('/users');
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});