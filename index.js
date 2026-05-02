const express=require("express");
const app=express();
const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const path=require("path");
let port=8080;
const methodoverride=require("method-override");
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"student",
    password:"abc@123"
})

let getRandomUser=()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}

app.listen(port,()=>{
    console.log(`your port number ${port} is working`);
})


app.get("/",(req,res)=>{
    let q="select count(*) from user";
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs",{count});
        })
    }catch(err){
        console.log(err);
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
});

app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id='${id}'`;

    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let user=result[0];
            res.render("edit.ejs",{user});
        })

    }catch(err){
        console.log(err);

    }
});



app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:formpass,username:newusername}=req.body;

    let q=`select * from user where id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            
            let user=result[0];
            if(formpass!=user.password){
                res.send("wrong password");
            }else{
                let q2=`update user set name='${newusername}' where id='${id}'`;

                connection.query(q2,(err,result)=>{
                    if(err)throw err;
                    res.redirect("/user");
                })
            }
        })
    }catch(err){
        console.log(err);
    }
})
// let q="insert into user(id,name,email,password)values ?";

// let data=[];

// for(let i=0;i<=100;i++){
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err)throw err;
//         console.log(result);
//     })
// }catch(err){
//     console.log(err);
// }
