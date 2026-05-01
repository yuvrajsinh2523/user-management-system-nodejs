const {faker}=require("@faker-js/Faker");
const mysql=require("mysql2");

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"student",
    password:"abc@123"
})

let getrandomeUser=()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}

let q="INSERT INTO user(id,name,email,password)values ?";

let data=[];

for(let i=)

try{
    connection.query()
}