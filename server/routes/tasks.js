var express = require('express'),
	router = express.Router(),
	Task = require('../models/taskModel');

router.get('/tasks', function(req, res, err) {
	Task.findAll().then(function(task) {
		res.json(task);
	});
});

router.post('/tasks', function(req, res) {
	Task.create({
		name: req.body.name,
		deadline: req.body.deadline,
		ListId: req.body.ListId
	}).then(function() {
		Task.findAll().then(function(task) {
			res.json(task);
		});
	});
});

router.put('/tasks', function(req, res) {
	Task.update({
		name: req.body.name,
		deadline: req.body.deadline,
		done: req.body.done
	}, {
		where: {
			id: req.body.id
		}
	}).then(function() {
		Task.findAll().then(function(task) {
			res.json(task);
		});
	});
});

router.delete('/tasks', function(req, res) {
	Task.destroy({
		where: {
			id: req.body.id
		}
	}).then(function() {
		Task.findAll().then(function(task) {
			res.json(task);
		});
	});
});

module.exports = router;