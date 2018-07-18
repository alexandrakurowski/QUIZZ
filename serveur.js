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
        	carte.push(results[i]);
        }
        console.log(results[0].ID)
        console.log(results[0].question)
        console.log(results[0].rep_1)
        console.log(results[0].rep_2)
        console.log(results[0].rep_3)
        console.log(results[0].rep_4)
    });
});

app.get('/question', function(req, res){
	res.json(carte);
console.log(carte)
});


	
 