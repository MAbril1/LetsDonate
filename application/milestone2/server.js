const express = require("express");
const path = require("path");

const app = express();


app.get('/api', function(req, res){
    const products = [
        {name: 'Piano', description:'An Old Piano'},
        {name: 'Guitar', description:'An Old Guitar'},
        {name: 'Flute', description:'An Old Flute'}
    ];
    console.log("Hello There");
    res.json(products);
});

app.post('/api/postProduct', function(req, res){
    console.log(req);
    res.send({success:true});
});

app.post('/api/makeSearch', function(req, res){
    console.log("Making Search");
    res.send({success:true});
});

app.post('/api/filterClothes', function(req, res){
    console.log("Filtering Clothes");
    res.send({success:true});
});

app.post('/api/filterFurniture', function(req, res){
    console.log("Filtering Furniture");
    res.send({success:true});
});

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.use(express.static(path.join(__dirname, "frontend/build")));

app.listen(5000);