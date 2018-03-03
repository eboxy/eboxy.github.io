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

	let books = obj;

console.log('map kontroll',books);

/*
for(let x=0;x < obj.length;x++){
output.innerText += obj[0];
}
*/


output.innerText = `tjo: ${books[1].title}`.toString();


 })



.catch( message => {
	console.log('Något gick fel: ' + message);
})
