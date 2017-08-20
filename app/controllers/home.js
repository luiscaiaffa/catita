module.exports.home = function(application, req, res){
	var connection = application.config.dbConnection;
	var GitDao = new application.app.models.GitDao(connection);
	GitDao.recuperarDados(res);
}