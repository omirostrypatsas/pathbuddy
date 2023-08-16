

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findByName(req.body.username, (err, user) => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }
    User.findByEmail(req.body.email, (err, user) => {
        console.log('check duplicate email')
        if (user) {
            res.status(400).send({
                message: "Failed! Email is already in use!"
            });
            return;
        }
            next();
        });
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  };
  
module.exports = verifySignUp;