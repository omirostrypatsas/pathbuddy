const sql = require("./dbconnection.js");


// constructor
const User = function(user) {
    this.email = user.email;
    this.password = user.password;
    console.log(user.email);
    console.log(user.password);
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser});
    });
  };

User.findByEmail = (email, result) => {
    console.log(email)
    sql.query(`SELECT * FROM users WHERE email = ?`, email, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else if (!res.length) {
        result({ kind: "not_found" }, null);
        res.status(404).json({ success: false, message: 'User not found' });
      } else {
        result(null, res[0]);
        res.json({ success: true, message: 'Login successful' });
      }
    });
};

User.getAll = (email, result) => {
  let query = "SELECT * FROM users";

  if (email) {
    query += `WHERE email LIKE '%$(email)%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("emails: ", res);
    result(null, res);
  });
};

module.exports = User;