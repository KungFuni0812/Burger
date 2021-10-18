var connection = require("../config/connection.js");


var orm = {
    //view all the burgers that is in the database
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //adding a burger in the db
    insertOne: function(table, colName, valueName, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        console.log(queryString);
        connection.query(queryString, [table, colName, valueName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //updating the burger from 0 to 1 once the devour button is press
    updateOne: function(table, colName1, valueName, colName2, valueName2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        
        connection.query(
            queryString,
            [table, colName1, valueName, colName2, valueName2,],
            function(err, result) {
                if (err) throw err;
                cb(result);
            }
        );
        }
    };
    
    module.exports = orm;
    