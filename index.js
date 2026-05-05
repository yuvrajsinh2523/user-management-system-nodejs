const express=require("express");
const app=express();
const path=require("path");
const port=8080;
const methodoverride=require("method-override");
const {v4:uuidv4}=require("uuid");


const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"student",
    password:"abc@123"
})

app.listen(port,()=>{
    console.log("your port is working")
})

app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/user",(req,res)=>{
    let {name,email,password}=req.body;
    let id=uuidv4();
    let q=`insert into user(id,name,email,password)values (?,?,?,?)`;
    try{
        connection.query(q,[id,name,email,password],(err,result)=>{
            if(err)throw err;
            res.redirect("/user");
        })

    }catch(err){
        console.log(err);
    }
})

app.get("/",(req,res)=>{
    let q=`select count(*) from user`;

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
        res.render("showuser.ejs",{user});
        })
    }catch(er){
        console.log(er);
    }
})

app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id='${id}'`;

    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let user=result[0];
            res.render("edit.ejs",{user});
        });

    }catch(err){
        console.log(err);
    }

})

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {username:newUserName,password:formpass}=req.body;
    let q=`select * from user where id='${id}'`;
    try{
        connection.query(q,(err,request)=>{
            if(err) throw err;
            else{
                let q2=`update into user set name='${newUserName}' where password='${formpass}'`;
                res.redirect("/user");
            }
        })
    }catch(err){
        console.log(err);
    }
})

app.delete("/user/:id",(req,res)=>{
    let {id}=req.params;
    let q=`delete from user where id=?`;

    try{
        connection.query(q,[id],(err,result)=>{
            if(err)throw err;
            res.redirect("/user");
        })
    }catch(err){
        console.log(err);
    }
})


const getRandomUser=()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}












// let q=`insert into user(id,name,email,password)values ?`;
// let data=[];

// for(let i=1;i<=100;i++){
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
