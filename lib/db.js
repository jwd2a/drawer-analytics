var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI);

var db = mongoose.connection;

db.on("error", function(){
    console.log("error connecting to db");
});

db.on("open", function(){
    console.log("connected!");
});

exports.db = db;