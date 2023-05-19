var Review = require("./Models/Review_Model");

var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/reviews");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

// Add new REVIEWModel
app.user("/reviews", (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var comment = req.body.comment;
  var rating = req.body.rating;
  var new_review = new Review({
    name: name,
    comment: comment,
    rating: rating,
  });

  new_review.save(function (error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Review saved successfully!",
    });
  });
});
