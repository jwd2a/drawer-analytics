var express = require('express');
var router = express.Router();
var Metric = require("../models/metric").model;
var _ = require("underscore");

router.get('/', function(req, res) {
    Metric.find(req.query, function(err, result){
        if(!err){
            res.send(result);
        }else{
        	res.send(err);
				}
    });
});

router.post('/', function(req, res){
    var metric = new Metric(req.body);
    metric.save(function(err, result){
        if(!err){
            res.send(result);
        }else{
        	res.send(err);
				}
    });
});

module.exports = router;
