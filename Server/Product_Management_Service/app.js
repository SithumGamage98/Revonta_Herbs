var Product = require("./Models/Product_Model");

var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/products");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

// Add new PRODUCTModel
app.product("/products", (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var slug = req.body.slug;
  var price = req.body.price;
  var category = req.body.category;
  var countInStock = req.body.countInStock;
  var brand = req.body.brand;
  var new_product = new Product({
    name: name,
    slug: slug,
    category: category,
    price: price,
    countInStock: countInStock,
    brand: brand,
  });

  new_product.save(function (error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Product is saved successfully!",
    });
  });
});
