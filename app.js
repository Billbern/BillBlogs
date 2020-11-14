const express = require('express');
const app = express();




app.get('/', (req, res)=>{
    res.send("Hello Blog");
})



app.listen(5060, ()=>{
    console.log('Server is running on 5060');
});