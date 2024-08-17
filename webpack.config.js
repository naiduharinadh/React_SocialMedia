const setRandomFallback = require("bcryptjs");
import { resolve } from "path";

module.exports = {
  resolve:{ setRandomFallback:{"crypto": false}}
}