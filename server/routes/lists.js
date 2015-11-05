var express = require('express'),
	router = express.Router(),
	List = require('../models/listModel');

router.get('/lists', function(req, res, err) {
	List.findAll().then(function(list) {
		res.json(list);
	});
});


router.post('/lists', function(req, res) {
	List.create({
		name: req.body.name
	}).then(function() {
		res.end();
	});
});

router.put('/lists', function(req, res) {
	List.update({
		name: req.body.name
	}, {
		where: {
			id: req.body.id
		}
	}).then(function() {
		res.end();
	});
});


router.delete('/lists', function(req, res) {
	List.destroy({
		where: {
			id: req.body.id
		}
	}).then(function() {
		res.end();
	});
});

module.exports = router;