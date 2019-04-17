var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Dinosaure = require('../modeles/Dinosaures.js');



/* GET ALL DINOSAURES */
router.get('/', function(req, res, next) {
    Dinosaure.find(function(err, item) {
        if (err) return next(err);
        res.json(item);
    });
});

/* GET DINOSAURES BY ID */
router.get('/:id', function(req, res, next) {
    Dinosaure.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE DINOSAURES */
router.post('/', function(req, res, next) {
    Dinosaure.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE DINOSAURES */
router.put('/:id', function(req, res, next) {
    Dinosaure.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE DINOSAURES */
router.delete('/:id', function(req, res, next) {
    Dinosaure.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
