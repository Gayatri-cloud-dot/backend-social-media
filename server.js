const app = require("./app");
const { connectDatabase } = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const cloudinary = require("cloudinary");

dotenv.config();

connectDatabase();
cloudinary.config({
  cloud_name: "dbjn4c4z8",
  api_key: "762328862334728",
  api_secret: "tPMUPma4LXBFddxuJS-NgTPOTKU",
});

app.listen(4000, () => {
  console.log(`server is running on port ${4000}`);
});
