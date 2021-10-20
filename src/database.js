const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'webbasic',
    password:'webbasic',
    database: 'webbasic'
});

conn.connect(function (err){
    if (err){
        console.log(err);
        return;
    } else {
        console.log('db is connected')
    }
});

module.exports=conn;