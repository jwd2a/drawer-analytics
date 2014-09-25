var mongoose =  require("mongoose");
var db       =  require("../lib/db");

var _obj = new mongoose.Schema({
    _id: String,
    type: String
});

var metricSchema = new mongoose.Schema({
    type: String,
    objectType: String,
    objectId: String,,
    agent: String,
    date: Date,
    apiVersion: String
});

exports.model = mongoose.model("Metric", metricSchema);