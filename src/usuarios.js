const express=require('express');
const conn = require('./database');
const router=express.Router();
const mysqlConnection=require('./database');

router.get('/usuarios',(req,res)=>{
    conn.query('select id,nombre from usuarios',(err,rows,fields)=>{
        if (!err){
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})

router.get('/usuarios/:id',(req,res)=>{
    const {id}=req.params;
    conn.query('select * from usuarios where id = ?',[id],(err,rows,fields)=>{
        if (!err){
            res.json(rows[0])
        } else {
            console.log(err)
        }
    })    
})

router.post('/usuarios',(req,res)=>{
    const {id,nombre,email}=req.body;
    if (id==0) 
        conn.query('insert into usuarios (nombre,email) values (?,?)',[nombre,email],(err,rows,fields)=>{
            if (!err){
                res.json({Status:'Usuario creado'})
            } else { 
                console.log(err)
            }
        })        
})

module.exports=router;

 