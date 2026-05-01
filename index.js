const {faker}=require("@faker-js/Faker");
const mysql=require("mysql2");

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"student",
    password:"abc@123"
})

let getrandomUser=()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}

let q="INSERT INTO user(id,name,email,password)values ?";

let data=[];

for(let i=1;i<=100;i++){
    data.push(getrandomUser());
}

try{
    connection.query(q,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}
