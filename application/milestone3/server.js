const express = require("express");
const path = require("path");
const config = require('./backend/database/createTable');
const app = express();
const parser = require('body-parser');

const aws = require('aws-sdk');
const multer = require("multer");
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  accessKeyId: 'AKIAURJ5OHF5UD4NHFTF',
  secretAccessKey: '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',
  Bucket: 'csc648imagesbucket'
});

app.use(parser.json());

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'csc648imagesbucket',
    acl: 'public-read',
    key: function (req, file, cb) {
      console.log("Multer API: ", file)
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
    }
  })
});

// loads all items from the three tables tables
app.get('/api', function (req, res) {
  config.query(`SELECT * FROM products`, function (e, response, f) {
    console.log(response);
    res.json(response);
  });

});

app.get('/api/allUsers', function (req, res) {
  config.query(`SELECT * FROM users`, function (e, response, f) {
    console.log(response);
    res.json(response);
  });

});

app.get('/api/Fundraisers', function (req, res) {
  config.query(`SELECT * FROM fundraisers`, function (e, response, f) {
    console.log(response);
    res.json(response);
  });
});

// apis related to users
// find registered user
app.post('/api/loginUser', function (req, res) {
  config.query(`SELECT * FROM users WHERE email LIKE '%${req.body.searchEmail}%' LIMIT 1`, function (e, response, f) {
    res.json({ success: true, users: response });
    console.log(response);
  });

});

// api to register a new user
app.post('/api/registerUser', upload.single("imageFile"), function (req, res) {

  console.log(req.body.name);
  if (!req.body.imageFile) // not registering with image
  {
    config.query(`INSERT INTO users (name, email, zipcode, password, userImage, recovery1, recovery2, claimedProducts)
                VALUES ('${req.body.name}', '${req.body.email}', '${req.body.zipcode}', '${req.body.password}', '${req.file.location}', '${req.body.recovery1}', '${req.body.recovery2}', '${req.body.claimedProducts}')`, function (e, response, f) { });
    res.send({ success: true });
  }
  else // registering with image
  {
    config.query(`INSERT INTO users (name, email, zipcode, password, userImage, recovery1, recovery2, claimedProducts)
                VALUES ('${req.body.name}', '${req.body.email}', '${req.body.zipcode}', '${req.body.password}', '${req.body.imageFile}', '${req.body.recovery1}', '${req.body.recovery2}', '${req.body.claimedProducts}')`, function (e, response, f) { });
    res.send({ success: true });
  }
});

// api to edit a user profile
app.post('/api/editUser', upload.single("imageFile"), function (req, res) {
  console.log(req.body);

  if (!req.body.imageFile) // updating image
  {
    config.query(`UPDATE users SET
                  name = '${req.body.name}', email = '${req.body.email}', zipcode = '${req.body.zipcode}', password = '${req.body.password}', userImage = '${req.file.location}',
                  recovery1 = '${req.body.recovery1}', recovery2 = '${req.body.recovery2}', claimedProducts = '${req.body.claimedProducts}' WHERE email = '${req.body.currentEmail}'`, function (e, response, f) { });
    res.send({ success: true, fileLocation: req.file.location });

    console.log("Image URL: ", req.file.location);
  }
  else // if not updating user image
  {
    config.query(`UPDATE users SET
                  name = '${req.body.name}', email = '${req.body.email}', zipcode = '${req.body.zipcode}', password = '${req.body.password}', userImage = '${req.body.imageFile}',
                  recovery1 = '${req.body.recovery1}', recovery2 = '${req.body.recovery2}', claimedProducts = '${req.body.claimedProducts}' WHERE email = '${req.body.currentEmail}'`, function (e, response, f) { });
    res.send({ success: true });
  }
});

app.post('/api/deleteUser', function (req, res) {
  config.query(`DELETE FROM users WHERE email = '${req.body.searchEmail}'`, function (e, response, f) {
    res.json({ success: true });
  });
});

app.post('/api/postProduct', upload.single("imageFile"), function (req, res) {
  req.body.description = req.body.description.replace(/'/g, "''"); // replaces ' so sql will not get confused

  config.query(`INSERT INTO products (name, description, productType, productImage, owner)
                VALUES ('${req.body.name}', '${req.body.description}', '${req.body.productType}', '${req.file.location}', '${req.body.owner}')`, function (e, response, f) {
  });
  res.send({ success: true });
});

app.post('/api/postFundraiser', upload.single("imageFile"), function (req, res) {
  req.body.description = req.body.description.replace(/'/g, "''"); // replaces ' so sql will not get confused

  config.query(`INSERT INTO fundraisers (title, description, requiredAmount, image, endorsement, owner)
                VALUES ('${req.body.title}', '${req.body.description}', '${req.body.requiredAmount}', '${req.file.location}', '${req.body.endorsement}', '${req.body.owner}')`, function (e, response, f) {
  });
  res.send({ success: true });
});

app.post('/api/makeSearch', function (req, res) {
  config.query(`SELECT * FROM products WHERE name LIKE '%${req.body.searchItem}%'`, function (e, response, f) {
    res.json({ success: true, products: response });
    console.log(response);
  });

});

app.post('/api/filterClothes', function (req, res) {

  config.query("SELECT * FROM products WHERE productType LIKE 'cloth'", function (e, response, f) {
    res.json({ success: true, products: response });
  });
});

app.post('/api/filterFurniture', function (req, res) {
  config.query("SELECT * FROM products WHERE productType LIKE 'furniture'", function (e, response, f) {
    res.json({ success: true, products: response });
  });
});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.listen(5000);