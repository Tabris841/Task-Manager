var express = require('express'),
    router = express.Router(),
    List = require('../models/listModel'),
    Task = require('../models/taskModel');

router.get('/lists', function (req, res, err) {
    List.findAll().then(function (list) {
        res.json(list);
    });

    //List.findAll().then(function (list) {
    //    ListItems = list;
    //}).then(function () {
    //    Task.findAll().then(function (task) {
    //        Tasks = task;
    //        var result = [];
    //        var result = ListItems.concat(Tasks);
    //        res.json(result);
    //
    //    });
    //});

    //Sequelize.query("SELECT * FROM 'Tasks' T JOIN 'Lists' L ON T.ListId = L.id", {
    //        replacements: ['active'],
    //        type: sequelize.QueryTypes.SELECT
    //    }
    //).then(function (result) {
    //    console.log(result);
    //
    //})

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