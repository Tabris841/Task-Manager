var express = require('express'),
    router = express.Router(),
    List = require('../models/listModel'),
    Task = require('../models/taskModel');

router.get('/lists', function (req, res, err) {
    List.findAll().then(function (list) {
        res.json(list);
    });
});

router.post('/lists', function (req, res) {
    List.create({
        name: req.body.name
    }).then(function () {
        List.findAll().then(function (list) {
            res.json(list);
        });
    });
});

router.put('/lists', function (req, res) {
    List.update({
        name: req.body.name
    }, {
        where: {
            id: req.body.id
        }
    }).then(function () {
        List.findAll().then(function (list) {
            res.json(list);
        });
    });
});


router.delete('/lists', function (req, res) {
    List.destroy({
        where: {
            id: req.body.id
        }
    });
    Task.destroy({
        where: {
            ListId: req.body.id
        }
    }).then(function () {
        List.findAll().then(function (list) {
            res.json(list);
        });
    });
});

module.exports = router;