var polls = require('../controllers/polls.js');

module.exports = function(app){
	//index: Showing collection
	app.get('/polls', function(req, res) {
		polls.index(req, res);
	});
	app.get('/polls/:id', function(req, res) {
		polls.show(req, res);
	});
	//create: creating into db
	app.post('/polls', function(req, res) {
		polls.create(req, res);
	});
	//for editing, PUT/POST functionality basically equivalent
	app.put('/polls/upvote1/:id', function(req, res) {
		polls.upvote1(req, res);
	});
	app.put('/polls/upvote2/:id', function(req, res) {
		polls.upvote2(req, res);
	});
	app.put('/polls/upvote3/:id', function(req, res) {
		polls.upvote3(req, res);
	});
	app.put('/polls/upvote4/:id', function(req, res) {
		polls.upvote4(req, res);
	});
	//deleting
	app.delete('/polls/:id', function(req, res) {
		polls.delete(req, res);
	});
	
};