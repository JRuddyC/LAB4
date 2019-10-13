const mongoose = require("./connect");
var USERSCHEMA = {
  name     : String,
  email    : String,
  password : String,
  registerdate: Date,
  sex      : String,
  address  : String
}
const USERS = mongoose.model("user", USERSCHEMA);
//module.exports = USERS;
module.exports = {model: USERS, schema: USERSCHEMA};
