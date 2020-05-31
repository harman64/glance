var express = require("express");
var app = express();

var cors = require("cors");
var multer = require("multer");
var path = require("path");
var fs = require("fs");

app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  path.join(__dirname, "/uploads"));
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
    return res.status(200).send(req.file);
  });
});

app.get("/report", function (req, res) {
  var filePath = path.join(__dirname, "/uploads/data.csv");
  var stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": "text/csv",
    "Content-Length": stat.size,
  });

  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

app.listen(3001, function () {
  console.log("App running on port 3001");
});
