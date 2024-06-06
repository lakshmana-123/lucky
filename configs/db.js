const mysql = require("mysql")
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'dbms@143',
    database : 'student'
});
   
db.connect((err)=>{
   if(err){
      console.log("Error Connecting database");
      return
   }else{
      console.log("Database connected successfully")
   }
})

module.exports=db;