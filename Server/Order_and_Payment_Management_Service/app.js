var Order = require("./Models/Order_Model");

var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/users");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

// Add new ORDERModel
app.user("/orders", (req, res) => {
  var db = req.db;
  var orderItems = req.body.orderItems;
  var paymentMethod = req.body.paymentMethod;
  var paymentResult = req.body.paymentResult;
  var itemsPrice = req.body.itemsPrice;
  var shippingPrice = req.body.shippingPrice;
  var commisionCost = req.body.commisionCost;
  var totalPrice = req.body.totalPrice;
  var new_order = new Order({
    orderItems: orderItems,
    paymentMethod: paymentMethod,
    paymentResult: paymentResult,
    itemsPrice: itemsPrice,
    shippingPrice: shippingPrice,
    commisionCost: commisionCost,
    totalPrice: totalPrice,
  });

  new_order.save(function (error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Order saved successfully!",
    });
  });
});
