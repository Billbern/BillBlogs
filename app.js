const express = require('express');
const app = express();


app.get('/admin', (req, res)=>{
    res.send("Admin page");
})


app.get('/', (req, res)=>{
    res.send("Hello Blog");
})


app.listen(5060, ()=>{
    console.log('Server is running on 5060');
});