window.addEventListener('load', function() {

//getBooks(){

console.log('Det fungerar!');

let url = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let op = 'select';
let key = 'fzJ8Z';
//lat 57.678509 long 12.000214
let finalUrl = `${url}?op=${op}&key=${key}`;
console.log('Hämtar data från: ' + finalUrl);
fetch(finalUrl)
.then( response => {
	console.log('Svar från servern:', response);
	return response.json();
} )
.then(function(obj){

  console.log('svar som objekt',obj);
	let output = document.getElementById('response');
	let status = document.getElementById('status');




status.innerHTML = "<strong>Status:</strong> " + obj.status + "<br><br>"
+ "<strong>Meddelande:</strong> " + obj.message;




let author1 = obj.data[1].author;
let title1 = obj.data[1].title;
let author2 = obj.data[0].author;
let title2 = obj.data[0].title;

let text = author1 + ": " + title1;
let text2 = author2 + ": " + title2;

let restext = "<ul><li>" + text + "</ul></li>";
let restext2 = "<ul><li>" + text2 + "</ul></li>";

output.innerHTML = restext + restext2;


	})




// })



.catch( message => {
	console.log('Något gick fel: ' + message);
});

//});

});
