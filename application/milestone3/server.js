const express = require("express");
const path = require("path");
const config = require('./backend/database/createTable');
const app = express();
const parser = require('body-parser');

const aws = require( 'aws-sdk' );
const multer = require("multer");
const multerS3 = require( 'multer-s3' );

const s3 = new aws.S3({
	  accessKeyId: 'xxx',
	  secretAccessKey: 'xxx',
	  Bucket: 'yourbucketname'
});

app.use(parser.json());


app.get('/api', function(req, res){
    config.query(`SELECT * FROM products`, function (e, response, f) {
      console.log(response);
      res.json(response);
    });
    
});

app.get('/api/allUsers', function(req, res){
  config.query(`SELECT * FROM users`, function (e, response, f) {
    console.log(response);
    res.json(response);
    });
  
});

// find registered user
app.post('/api/loginUser', function(req, res){
  config.query(`SELECT * FROM users WHERE email LIKE '%${req.body.searchEmail}%' LIMIT 1`, function (e, response, f) {
    res.json({success:true, users:response});
    console.log(response);
  });
  
});

let fn; // create variable used to save filename

const storage = multer.diskStorage({
  destination: "frontend/public/images",
  filename: function(req, file, a) {
    // creates a filename adding the date uploaded between filename and extension, also removes any spaces from filename
    fn = file.originalname.split(path.extname(file.originalname))[0] + '-' + Date.now() + path.extname(file.originalname);
    fn = fn.replace(/\s/g, '');
    a(null, fn);
  }
});
const upload = multer({ storage: storage });

app.post('/api/postProduct', upload.single("imageFile"), function(req, res){
      req.body.description = req.body.description.replace(/'/g, "''");
      config.query(`INSERT INTO products VALUES ('${req.body.name}', '${req.body.description}', '${req.body.productType}', '${fn}')`, function (e, response, f) {
      });
      fn = undefined; // reset the uploaded images filename variable
    res.send({success:true});
});

// api to register a new user
app.post('/api/registerUser', upload.single("imageFile"), function(req, res){
  
  console.log(req.body.name);

  config.query(`INSERT INTO users (name, email, zipcode, password, userImage, recovery1, recovery2)
                VALUES ('${req.body.name}', '${req.body.email}', '${req.body.zipcode}', '${req.body.password}', '${fn}', '${req.body.recovery1}', '${req.body.recovery2}')`, function (e, response, f) {});
  fn = undefined; // reset the uploaded images filename variable
  res.send({success:true});
});

// api to edit a user profile
app.post('/api/editUser', upload.single("imageFile"), function(req, res){
  
  console.log(req.body.name);

  if(!fn) // if not updating user image
  {
    config.query(`UPDATE users SET name = '${req.body.name}', email = '${req.body.email}', password = '${req.body.password}', zipcode = '${req.body.zipcode}', 
                  userImage = '${req.body.imageFile}', recovery1 = '${req.body.recovery1}', recovery2 = '${req.body.recovery2}' WHERE email = '${req.body.currentEmail}'`, function (e, response, f) {});
    res.send({success:true, filename:req.body.imageFile});
  }
  else 
  {
    config.query(`UPDATE users SET name = '${req.body.name}', email = '${req.body.email}', password = '${req.body.password}', zipcode = '${req.body.zipcode}',
                  userImage = '${fn}', recovery1 = '${req.body.recovery1}', recovery2 = '${req.body.recovery2}' WHERE email = '${req.body.currentEmail}'`, function (e, response, f) {});
    fn = undefined; // reset the uploaded images filename variable
    res.send({success:true, filename:fn});
  }
});

app.post('/api/makeSearch', function(req, res){
      config.query(`SELECT * FROM products WHERE name LIKE '%${req.body.searchItem}%'`, function (e, response, f) {
        res.json({success:true, products:response});
        console.log(response);
      });
      
});

app.post('/api/filterClothes', function(req, res){

      config.query("SELECT * FROM products WHERE productType LIKE 'cloth'", function (e, response, f) {
        res.json({success:true, products:response});
      });
      

      
});

app.post('/api/filterFurniture', function(req, res){
        config.query("SELECT * FROM products WHERE productType LIKE 'furniture'", function (e, response, f) {
          res.json({success:true, products:response});
        });

});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, "build", "index.html"));
})


app.listen(5000);