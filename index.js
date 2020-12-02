//Dependencias
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const recursos = require('./routes/recursos');
const user = require('./routes/user');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const cors = require('./middleware/cors');



app.get("/", (req, res, next) =>{
    res.status(200);
    res.send("Bienvenido");
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});