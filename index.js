const express = require('express');
const app = express();

var users = require('./routes/users')
var products = require('./routes/products')




app.use('/' ,users);
app.use('/' ,products)








const PORT= process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`server started on port ${PORT}`)

})
