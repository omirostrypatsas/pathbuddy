const { verifySignUp } = require("../middleware");
const controller = require("../controllers/authController");

module.exports = function(app) {

    var app = require("express").Router();

    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/singup",
        [verifySignUp.checkDuplicateUsernameOrEmail],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);
}
