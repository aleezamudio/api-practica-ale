const express = require('express');
const fs      = require('fs');
const app     = express();
const PORT    = 4000;
const {get}   = require('http');
const { users } = require('./src/files/Users.json');

const morgan = require('morgan');
const bodyParser = require('body-parser');


// middlewares 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server  = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('<h1 style="color:blue;">api-practica-Zamudio Alejandro</h1>')
})
app.post('/users/create',(req, res) => {
    const { first_name, last_name, age, mail, phone_number, direction, nationality, civil_status, gender, date_of_birth } = req.body;
    const id = users.length + 1;
    const newUser = { id, first_name, last_name, age, mail, phone_number, direction, nationality, civil_status, gender, date_of_birth };
    users.push(newUser);
    fs.writeFileSync('./src/files/Users.json', JSON.stringify({ users }));
    res.json({
        "success": true,
        "msg": "Successfully added"
    });
})
app.get('/users',(req,res)=>{
    const data           = fs.readFileSync('./src/files/Users.json', 'utf-8');
    const arrayUsers     = JSON.parse(data);
    res.json({
        users : arrayUsers,
        amount: arrayUsers.length,
    })
})
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user   = users.find(user => user.id == id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            "success": false,
            "msg": "User not found"
        });
    }
})
