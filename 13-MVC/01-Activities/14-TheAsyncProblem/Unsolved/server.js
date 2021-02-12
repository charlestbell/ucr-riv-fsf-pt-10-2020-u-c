var orm = require("./config/orm.js");
console.log("first line");
orm.selectWhere("parties", "party_type", "grown-up", (result) => {
  console.log(result); // Data is undefined. Why?
});
