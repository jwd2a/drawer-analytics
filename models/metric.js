var mongoose =  require("mongoose");
var db       =  require("../lib/db");

var _obj = new mongoose.Schema({
    _id: String,
    type: String
});

var metricSchema = new mongoose.Schema({
    type: String,
    objectType: String,
    objectId: String,
    date: Date
});

exports.model = mongoose.model("Metric", metricSchema);