const chart = require("./dashboard_chart");

function form(method) {
  let res = null;
  switch (method) {
    case "POST":
      res = { message: "OK" };
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = form;
