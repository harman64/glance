var express = require("express");
var app = express();

var cors = require("cors");
var multer = require("multer");
var path = require("path");
var fs = require("fs");
var csv = require("csvtojson");

app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, "data.csv");
  },
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).end(req.file.filename);
  });
});

app.get("/report", function (req, res) {
  var csvFilePath = path.join(__dirname, "/uploads/data.csv");

  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      res.send(jsonObj);
    });
});

app.listen(3001, function () {
  console.log("App running on port 3001");
});
