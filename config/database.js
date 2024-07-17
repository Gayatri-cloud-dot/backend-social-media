const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/SocialMedia")
    .then((con) => console.log(`database connected :${con.connection.host}`))
    .catch((err) => console.log(err));
};
