// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    //view all the burgers that is in the database
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
        cb(res);
        });
    },
    //adding a burger in the db
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
        });
    },
    //updating the burger from 0 to 1 once the devour button is press
    updateOne: function(col1, val1, col2, val2, cb) {
        orm.updateOne("burgers", col1, val1, col2, val2, function(res) {
        cb(res);
        });
    },
};
    
// Export the database functions for the controller (burgersController.js).
module.exports = burger;
    