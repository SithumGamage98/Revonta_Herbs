var User = require("./Models/User_Model");

var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/users");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

// Add new USERModel
app.user("/users", (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var isAdmin = req.body.isAdmin;
  var new_user = new User({
    name: name,
    email: email,
    password: password,
    isAdmin: isAdmin,
  });

  new_user.save(function (error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "USer saved successfully!",
    });
  });
});
