const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.use('public', express.static(path.join(__dirname, 'public')));


app.get('/admin', (req, res)=>{
    res.render("admin");
})


app.get('/', (req, res)=>{
    res.render("home");
})


app.listen(5060, ()=>{
    console.log('Server is running on 5060');
});