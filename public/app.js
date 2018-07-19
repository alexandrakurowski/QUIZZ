
console.log('hello');

var tab = [];


$.ajax({
	 	type:'GET',
	 	url : '/question'
	 	
	 	 }).done(function(carte) {


				for (var i = 0; i < carte.length; i++) {
					tab.push({
						Id : carte[i].Id,
			            question : carte[i].question,
			            reponse_1 : carte[i].reponse_1,
			            reponse_2 : carte[i].reponse_2,
			            reponse_3 : carte[i].reponse_3,
			            reponse_4 : carte[i].reponse_4
		       		 });
				};
			});
	   	
console.log (tab);
console.log(tab.Id);  // affiche undefined because tab.Id se definit apres dans la bcle avec i=

$("#start").click(function(){

for (var i = 0; i < tab.length; i++) {

	$('#table').append('<table><tr><th>"Question n° "'+ tab[i].Id+'</th></tr></table>'); // affichage de ttes les questions avec n° ID my sql
	$('#table').apppend()
	
	};
});
// code placement victor

 	var tableau_melange = [];

	$('#jeu').empty();

		do
		{
			var l = Math.floor( Math.random() * tabQuest.length );
			var qt_alea = tabQuest[l];

			tableau_melange.push(qt_alea);

			tabQuest.splice(l,1);
		}
		while( tabQuest.length>0 );		

