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
		res.end();
	});
});

router.put('/tasks', function(req, res) {
	Task.update({
		name: req.body.name,
		deadline: req.body.deadline,
		done: req.body.done,
		ListId: req.body.ListId
	}, {
		where: {
			id: req.body.id
		}
	}).then(function() {
		res.end();
	});
});

router.delete('/tasks', function(req, res) {
	Tasks.destroy({
		where: {
			id: req.body.id
		}
	}).then(function() {
		res.end();
	});
});

module.exports = router;