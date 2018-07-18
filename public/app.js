
console.log('hello');

$.ajax({
	 	type:'GET',
	 	url : '/question'
	 	
	 	 }).done(function(carte) {
	   		console.log(carte);
	   	});

for (var i = 0; i < carte.length; i++) {
  
      $(('#idquest').apppend('<tr><td> " Question " '+carte[i].ID+ '</td><td>'+ carte[i].question +'</td></tr><tr><td>'+carte[i].rep_1+'</td><td>'+books[i].rep_2+'</td></tr>'));
 }; 	    