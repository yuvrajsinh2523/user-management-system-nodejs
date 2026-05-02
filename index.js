const express=require("express");
const app=express();
const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
let port=8080;

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"student",
    password:"abc@123"
})


app.listen(port,()=>{
    console.log(`your port ${port} is working now`);
})

app.get("/",(req,res)=>{

    let q="select count(*) from user"

    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs",{count});
        })
    }catch(err){
        console.log(err);
        res.send("somthing not found");
    }
})

app.get("/user",(req,res)=>{
    let q=`select * from user`;
    try{
        connection.query(q,(err,user)=>{
            if(err)throw err;
            res.render("showuser.ejs",{user})
        })
    }catch(er)
    {
        console.log(er);
    }
})

// let  getRandomeUser=()=>{
//     return[
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password()
//     ]
// }

// let q="insert into user(id,name,email,password)values ?";


// let data=[];

// for(let i=1;i<=100;i++){
//     data.push(getRandomeUser());
// }
// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err)throw err;
//         console.log(result);
//     })

// }catch(err){
//     console.log(err);
// }
