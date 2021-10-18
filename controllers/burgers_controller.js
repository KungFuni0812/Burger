var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


//view all the burgers that is in the database
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerObject = {
            burgers: data
        };
    console.log(`~~~~~~~~~~`)
    console.log(`burgerObject:`)
    console.log(burgerObject);
    console.log(`~~~~~~~~~~`)
    res.render("index", burgerObject);
    });
});

//adding a burger in the db
router.post("/api/burgers", function(req, res){
    burger.insertOne("burger_name", req.body.name, function(result){
// Send back the ID of the new quote
    res.json({id: result.id});
    });
});


//updating the burger from 0 to 1 once the devour button is press
router.put("/api/burgers/:id", function(req, res){
    var burgerID = req.params.id;
    burger.updateOne(
        "devoured", 1, "id", burgerID, function(result){
            res.json({id: result.id});
        }
    )
});


// Export routes for server.js to use.
module.exports = router;