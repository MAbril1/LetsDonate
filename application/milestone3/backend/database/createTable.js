const mysql = require('mysql');



const config = mysql.createConnection({
    host: "csc648db.cfv7ws6h9rfu.us-east-2.rds.amazonaws.com",
    user: "csc648team3" ,
    password: "csc648database",
    database: "letsDonate"
});

config.connect(function(fault){
    if(!fault){
        console.log("Connected");
        config.query("Create Database if not exists letsDonate;");
        config.query("USE letsDonate;", function (e, r, f) {});
        config.query("CREATE TABLE IF NOT EXISTS products("+ 
                    "name varchar(30), " + 
                    "description varchar(255), " + 
                    "productType varchar(30), "+
                    "productImage varchar(255) );",
                  function(e,r,f){console.log(e)});

        config.query("CREATE TABLE IF NOT EXISTS users("+ 
                    "id int NOT NULL AUTO_INCREMENT, " + 
                    "name varchar(30) NOT NULL, " + 
                    "email varchar(255) NOT NULL, " + 
                    "zipcode varchar(30) NOT NULL, "+
                    "password varchar(255) NOT NULL, "+
                    "userImage varchar(255) NOT NULL, "+
                    "recovery1 varchar(255) NOT NULL, "+
                    "recovery2 varchar(255) NOT NULL, "+
                    "PRIMARY KEY (id) );",
                function(e,r,f){console.log(e)});

    }else{
        console.log("Not Connected", fault);
        return;
    }
    
});

module.exports = config;