var express = require ('express');
var mysql = require('mysql') //https://www.terlici.com/2015/08/13/mysql-node-express.html / envoi de la requete
var bodyParser = require ('body-parser')
var app = express();

app.use(express.static('public'));


app.get ('/', function(req, res){
	res.send ('hello world !');
});

app.listen(3300, function(){
	console.log ('premier test');
});


var connection = mysql.createConnection({  // pour se connecter a mysql
  host: 'localhost',          // les infos de php myadmin
  user: 'alex',
  password: 'alexandra32',
  database: 'quizz'          // le nom de la data
})

 var carte = [];
connection.connect(function(err) {
	  if (err) throw err
	  console.log('You are now connected...')

 	connection.query('SELECT * FROM questionnaire', function(err, results) {    // questionnaire  = tableau de la bdd
        if (err) throw err
        for (var i = 0; i < results.length; i++) {
        	carte.push({
            Id : results[i].ID,
            question : results[i].question,
            reponse_1 : results[i].rep_1,
            reponse_2 : results[i].rep_2,
            reponse_3 : results[i].rep_3,
            reponse_4 : results[i].rep_4
          });
        };
     
    });
});

app.get('/question', function(req, res){
	res.json(carte);
  console.log(carte);
});


	
 