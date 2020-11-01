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

app.post('/api/postProduct', function(req, res){
    /*
    config.connect(function(e) {
        if (e) throw err;
        config.query("INSERT INTO products VALUES('')", function (e, response, f) {
          if (e) throw e;
          console.log(response);
        });
      });
      */

    res.send({success:true});
});

app.post('/api/makeSearch', function(req, res){
    console.log("Making Search");
    /*
    config.connect(function(e) {
        if (e) throw err;
        config.query("SELECT * FROM products WHERE name LIKE ", function (e, response, f) {
          if (e) throw e;
          console.log(response);
        });
      });
      */
    res.send({success:true});
});

app.post('/api/filterClothes', function(req, res){
    console.log("Filtering Clothes");
    /*
    config.connect(function(e) {
        if (e) throw err;
        config.query("SELECT * FROM products WHERE type LIKE ", function (e, response, f) {
          if (e) throw e;
          console.log(response);
        });
      });
      */
    res.send({success:true});
});

app.post('/api/filterFurniture', function(req, res){
    console.log("Filtering Furniture");
    /*
    config.connect(function(e) {
        if (e) throw err;
        config.query("SELECT * FROM products WHERE type LIKE ", function (e, response, f) {
          if (e) throw e;
          console.log(response);
        });
      });
      */
    res.send({success:true});
});

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.use(express.static(path.join(__dirname, "frontend/build")));

app.listen(5000);