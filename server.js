const app = require("./app");
const { connectDatabase } = require("./config/database");
const dotenv = require("dotenv");
//const cors = require("cors");
dotenv.config();

connectDatabase();

app.listen(4000, () => {
  console.log(`server is running on port ${4000}`);
});
