var Delivery = require("./Models/Delivery_Model");

var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/deliveries");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

// Add new DELIVERYModel
app.delivery("/deliveries", (req, res) => {
  var db = req.db;
  var fullName = req.body.fullName;
  var address = req.body.address;
  var postalCode = req.body.postalCode;
  var country = req.body.country;
  var new_delivery = new Delivery({
    fullName: fullName,
    address: address,
    city: city,
    postalCode: postalCode,
    country: country,
  });

  new_delivery.save(function (error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Delivery saved successfully!",
    });
  });
});
