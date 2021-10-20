const express=require('express');
const conn = require('./database');
const router=express.Router();
const mysqlConnection=require('./database');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });
  

router.get('/catalogo',(req,res)=>{
    conn.query('select * from programas',(err,rows,fields)=>{
        if (!err){
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})

router.get('/catalogo/:id',(req,res)=>{
    const {id}=req.params;
    conn.query('select * from programas where id = ?',[id],(err,rows,fields)=>{
        if (!err){
            res.json(rows[0])
        } else {
            console.log(err)
        }
    })    
})

router.get('/catalogo/usuario/:id',(req,res)=>{
    const {id}=req.params;
    conn.query('select * from programas where usuario = ?',[id],(err,rows,fields)=>{
        if (!err){
            res.json(rows[0])
        } else {
            console.log(err)
        }
    })    
})

router.post('/programas',(req,res)=>{
    const {id,nombre,email}=req.body;
    if (id==0) 
        conn.query('insert into programas (nombre,email) values (?,?)',[nombre,email],(err,rows,fields)=>{
            if (!err){
                res.json({Status:'Usuario creado'})
            } else { 
                console.log(err)
            }
        })        
})

module.exports=router;

 