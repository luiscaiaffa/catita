module.exports.webhook = function(application, req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");

	var dadosForm = req.body;
	var connection = application.config.dbConnection;
	var GitDao = new application.app.models.GitDao(connection);
	
	GitDao.inserirDados(dadosForm);

	application.get('io').emit(
		'msgParaCliente',
		dadosForm
	);

	res.json({'status': 'ok'});
}