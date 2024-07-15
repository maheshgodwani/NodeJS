const express = require('express');
const app = express();

app.use(express.json())

app.get('/login/:username/:password', (req,res) =>{
    const {username, password} = req.params;
    res.send({
        "req Method":"Get with params",
        "myname":username,
        "mypass":password
    });
});
// http://localhost:2000/login/mhs/123

app.get('/login', (req,res) => {
    const {username, password} = req.query;
    res.send({
        "req Method":"Get with QueryString",
        "myname":username,
        "mypass":password
    });
});
// http://localhost:2000/login?username=mhs&password=123

app.post('/login', (req,res) => {
    const {username, password} = req.body;
    res.send({
        "req Method":"Using Post",
        "myname":username,
        "mypass":password
    });
});
// http://localhost:2000/login

app.listen(2000, () => {
    console.log('listening on 2000')
})