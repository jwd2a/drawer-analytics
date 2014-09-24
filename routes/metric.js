var express = require('express');
var router = express.Router();
var Metric = require("../models/metric").model;
var _ = require("underscore");

/* GET home page. */
router.get('/', function(req, res) {

    Metric.find(req.query, function(err, result){
        if(!err){
            res.send(result);
        }
        //throw(err);
    });
});

router.post('/', function(req, res){
    console.log(req.body);
    var metric = new Metric(req.body);
    metric.save(function(err, result){
        if(!err){
            res.send(result);
        }
        //res.send(err);
    });
});

module.exports = router;
