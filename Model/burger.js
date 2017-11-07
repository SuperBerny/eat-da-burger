var orm = require("../config/orm.js");
var burger = {
   selectAll: function(cb) {
      orm.all("burgers", function(res) {
         cb(res);
      });
   },
   insertOne: function(cb) {
      orm.create("burgers", cols, vals, function(res) {
         cb(res);
      });
   },
   updateOne: function(cb) {
      orm.update("burgers", objColVals, condition, function(res) {
         cb(res);
      });
   }
};
//Export the database functions for the controller (burger_controller.js)
module.exports = burger;