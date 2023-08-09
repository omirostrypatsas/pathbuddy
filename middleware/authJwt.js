const jwt = require("jsonwebtoken");
const config = require("../config/authConfig.js");
const User = require("../model/userModel.js");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorised!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

isUser = (req, res, next) => {
    User.findById(req.userId, (err, user) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with id " + req.params.id
          });
        }
      } else {
        if (user.role === "user") {
          next();
          return;
        }
        else{
          res.status(403).send({
            message: "Require User Role!"
          });
          return;
        }
      }
    });
  };

  isAdmin = (req, res, next) => {
    User.findById(req.userId, (err, user) => {
      if (err) {
        if (err.kind === "not_found") {
            console.log(userId)
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with id " + req.params.id
          });
        }
      } else {
        if (user.role === "admin") {
          next();
          return;
        }
        else{
          res.status(403).send({
            message: "Require Admin Role!"
          });
          return;
        }
      }
    });
  
   };

const authJwt = {
    verifyToken: verifyToken,
    isUser: isUser,
    isAdmin: isAdmin
  };
  module.exports = authJwt;