var express = require('express');
var cors = require('cors')
var app = express();
var mysql = require('mysql');

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
  res.json({ message: "Weclome to JWT Authentication application"})
});

app.get("/test", (req,res) => {
  res.send({ message: "Weclome to JWT Authentication application"})
})

app.get("/", (req,res) => {
  res.send({ message: "Weclome to JWT Authentication application"})
});

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})








