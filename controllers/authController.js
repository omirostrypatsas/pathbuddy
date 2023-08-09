const config = require("../config/authConfig");
const User = require("../model/userModel.js");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req,res) => {
    const newUser = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    User.create(newUser,  (err,data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the new user."
            });
        else
            res.send(data);
    });
};

exports.signin = (req, res) => {

    User.findByEmail(req.body.email, (err, user) => {
        console.log(email)
        if (err) {
            if (err.kind === "not_found") {
                console.log(email)
                res.status(404).send({
                    message: 'Not found user with this email.',

                });
            } else {
                res.status(500).send({
                    message: 'Error retrieving user with this email.'
                });
            }
        } else {
            var passwordIsValid = bcrypt.compareSync(
                console.log(user.password, req.body.password),
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
              } else {
                // If the password is valid, generate and send the JWT token
                const token = jwt.sign({ email: user.email }, config.secret, {
                  expiresIn: 86400 // Token will expire in 24 hours
                });
        
                res.json({ success: true, token });
              }

              var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
              });

              res.status(200).send({
                email: user.email,
                accessToken: token
              });
        };
    });
};