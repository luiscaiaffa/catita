function GitDao(connection){
	this._connection = connection();
}

GitDao.prototype.inserirDados = function(dados){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("github", function(err, collection){
			//collection.insert(dados);
			mongoclient.close();
		});
	});
}

GitDao.prototype.recuperarDados = function(res){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("github", function(err, collection){
			collection.find().toArray(function(err, result){
				res.render('home/home', {dados: result});
			});
		});
	});
}

module.exports = function(){
	return GitDao;
}