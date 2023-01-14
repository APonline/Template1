const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// ---local only
var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
// ---local only

app.use(function (req, res, next) {

    var allowedDomains = ['http://localhost', 'http://localhost:4200', 'http://0.0.0.0:8080', 'http://localhost:8080', 'http://localhost:3000' ];
    var origin = req.headers.origin;
    if(allowedDomains.indexOf(origin) > -1){
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---get OvaLord models
const db = require("./models");

// ---dynamic route collector
require("./routes")(app);

db.sequelize.sync();

// ---all routes
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
  
// ---simple home route
app.get("/", (req, res) => {
    res.json({ message: "Ove didn't want you to see me naked like this." });
});

// ---set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});