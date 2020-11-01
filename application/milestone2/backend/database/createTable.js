const mysql = require('mysql');


/*
TODO: Fill out the databse host, username, pass, etc
*/
const config = mysql.createConnection({

});

config.connect(function(fault){
    if(!fault){
        console.log("Connected");
    }else{
        console.log("Not Connected");
        return;
    }

    config.query("Create Database if not exists letsDonate;");
    config.query("USE letsDonate;", function (r, r, f) {});
    config.query("CREATE TABLE IF NOT EXISTS products("+ "name varchar(30), " + "description varchar(30), " + 
              "productType varchar(30)", "productImage varchar(255) );", function(e,r,f){});
    
});

module.exports = config;