const express=require('express');
const app=express();

// settings
app.set('port',process.env.port || 3000);

// middlewares
app.use(express.json());

// routes
app.use(require('./programas'));
app.use(require('./usuarios'));

// start server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'))
})