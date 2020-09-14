

const express = require("express");
const path = require("path");
//app.use(express.static(path.join(__dirname, "build")));

const app = express();

//app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname, "build", "index.html"));
})
 console.log("Hello");
app.listen(5000);