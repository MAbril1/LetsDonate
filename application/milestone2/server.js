const express = require("express");
const path = require("path");
const config = require('./backend/database/createTable');
const app = express();
const parser = require('body-parser');

app.use(parser.json());


app.get('/api', function(req, res){
    const products = [
        { name: 'Piano', description:'An Old Piano', productType:'Furniture'},
        { name: 'Guitar', description:'An Old Guitar', productType:'Furniture'},
        {name: 'Flute', description:'An Old Flute', productType:'Furniture'},
        { name: 'Sitar', description:'An Old Sitar', productType:'Furniture'},
        { name: 'Tabla', description:'An Old Tabla', productType:'Furniture'},
        {name: 'Harmonium', description:'An Old Harmonium', productType:'Furniture'},
        { name: 'Mouth Organ', description:'An Old Mouth Organ', productType:'Furniture'},
        { name: 'Trumpet', description:'An Old Trumpet', productType:'Furniture'},
        {name: 'Bell', description:'An Old Bell', productType:'Furniture'},
        { name: 'Conga', description:'An Old Conga', productType:'Furniture'},
        { name: 'Drum', description:'An Old Drum', productType:'Furniture'},
        {name: 'Ukelele', description:'An Old Ukelele', productType:'Furniture'},
        { name: 'Piano', description:'An Old Piano', productType:'Furniture'},
        { name: 'Guitar', description:'An Old Guitar', productType:'Furniture'},
        {name: 'Flute', description:'An Old Flute', productType:'Furniture'},
        { name: 'Sitar', description:'An Old Sitar', productType:'Furniture'},
        { name: 'Tabla', description:'An Old Tabla', productType:'Furniture'},
        {name: 'Harmonium', description:'An Old Harmonium', productType:'Furniture'},
        { name: 'Mouth Organ', description:'An Old Mouth Organ', productType:'Furniture'},
        { name: 'Trumpet', description:'An Old Trumpet', productType:'Furniture'},
        {name: 'Bell', description:'An Old Bell', productType:'Furniture'},
        { name: 'Conga', description:'An Old Conga', productType:'Furniture'},
        { name: 'Drum', description:'An Old Drum', productType:'Furniture'},
        {name: 'Ukelele', description:'An Old Ukelele', productType:'Furniture'}
    ];
    res.json(products);
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
      config.query(`INSERT INTO products VALUES ('${req.body.name}', '${req.body.description}', '${req.body.productType}')`, function (e, response, f) {
      });
      

    res.send({success:true});
});

app.post('/api/makeSearch', function(req, res){
    
      config.query("SELECT * FROM products WHERE name LIKE ", function (e, response, f) {});
      
    res.send({success:true});
});

app.post('/api/filterClothes', function(req, res){
      config.query("SELECT * FROM products WHERE type LIKE ", function (e, response, f) {});
      
      res.send({success:true});
});

app.post('/api/filterFurniture', function(req, res){
    
        config.query("SELECT * FROM products WHERE type LIKE ", function (e, response, f) {});
      
    res.send({success:true});
});

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.use(express.static(path.join(__dirname, "frontend/build")));

app.listen(5000);