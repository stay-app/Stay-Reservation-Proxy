var express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios");
var path = require("path");
const app = express();
const port = "5678";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

//received req send req to module's server?
//get bundle from module's server?

// app.get("/", (req, res) => { 
//   axios.get("http://localhost:1314/bundle.js")
//   .then((res) => {
//     res.send(req.query);
//   })//1314 reservation
// })

// axios.get("http://localhost:1129/?id=1")//1129 overview
// axios.get("http://localhost:3000/?id=1")//3000 review
// axios.get("http://localhost:3003/?id=1")//3003 photogallery

app.listen(port, () => {
  console.log(`listening to ${port}`);
});