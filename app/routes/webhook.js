module.exports = function(application){
	application.post('/webhook', function(req, res){
		application.app.controllers.webhook.webhook(application, req, res);
	});
}