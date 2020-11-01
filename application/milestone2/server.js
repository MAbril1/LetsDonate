const express = require("express");
const path = require("path");
const config = require('./backend/database/createTable');
const app = express();
const parser = require('body-parser');

app.use(parser.json());


app.get('/api', function(req, res){
    config.query(`SELECT * FROM products`, function (e, response, f) {
      console.log(response);
      res.json(response);
    });
    
});

const multer = require("multer");
const storage = multer.diskStorage({
  destination: "frontend/src/images",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/api/postProduct', upload.single("imageFile"),function(req, res){
      config.query(`INSERT INTO products VALUES ('${req.body.name}', '${req.body.description}', '${req.body.productType}', '')`, function (e, response, f) {
        console.log(response);
      });
      

    res.send({success:true});
});

app.post('/api/makeSearch', function(req, res){
      config.query(`SELECT * FROM products WHERE name LIKE '${req.body.searchItem}'`, function (e, response, f) {
        console.log(response);
        res.json(response);
      });
      
    res.send({success:true});
});

app.post('/api/filterClothes', function(req, res){
      config.query("SELECT * FROM products WHERE productType LIKE 'Cloth'", function (e, response, f) {
        console.log(response);
        res.json(response);
      });
      
      res.send({success:true});
});

app.post('/api/filterFurniture', function(req, res){
    
        config.query("SELECT * FROM products WHERE productType LIKE 'Furniture'", function (e, response, f) {
          console.log(response);
          res.json(response);
        });
      
        res.send({success:true});
});

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.use(express.static(path.join(__dirname, "frontend/build")));

app.listen(5000);