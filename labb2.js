

//hämta api-nyckel

window.addEventListener('load', function() {

	let buttonApiKey = document.getElementById('btnApiKey');
				buttonApiKey.addEventListener('click', function() {

console.log('Det fungerar!');

let urlApiKey = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let opApiKey = 'requestKey';

let finalUrlApiKey = `${urlApiKey}?${opApiKey}`;

console.log('Hämtar data från: ' + finalUrlApiKey);
fetch(finalUrlApiKey)
.then( responseApiKey => {
	console.log('Svar från servern:', responseApiKey);
	return responseApiKey.json();
} )
.then(function(objApiKey){

  console.log('svar som objekt',objApiKey);
	let outputApiKey = document.getElementById('responseApiKey');
	let statusApiKey = document.getElementById('statusApiKey');

statusApiKey.innerHTML = "<strong>Status:</strong> " + objApiKey.status + "<br><br>"
+ "<strong>Meddelande:</strong> " + objApiKey.message;


//lagra api-nyckel i konstant
var storageApiKey = objApiKey.key;

 outputApiKey.innerHTML = storageApiKey;

})


.catch( messageApiKey => {
	console.log('Något gick fel: ' + messageApiKey);
});

});

});


//................................................
//................................................



//hämta boklistan

window.addEventListener('load', function() {

	let button = document.getElementById('btn');
				button.addEventListener('click', function() {

console.log('Det fungerar!');

let url = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let op = 'select';
//let key = 'fzJ8Z';


let key = storageApiKey;
//storageApiKey

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


if(obj.status === "success")
{

		let author1 = obj.data[1].author;
		let title1 = obj.data[1].title;
		let author2 = obj.data[0].author;
		let title2 = obj.data[0].title;

		let text = author1 + ": " + title1;
		let text2 = author2 + ": " + title2;

		let restext = "<ul><li>" + text + "</ul></li>";
		let restext2 = "<ul><li>" + text2 + "</ul></li>";

		output.innerHTML = restext + restext2;

}
else if (obj.status === "error") {
	  output.innerHTML = "";
}

})


.catch( message => {
	console.log('Något gick fel: ' + message);
});

});

});





//................................................
//................................................



//hämta api-nyckel

window.addEventListener('load', function() {

	let buttonApiKey = document.getElementById('btnApiKey');
				buttonApiKey.addEventListener('click', function() {

console.log('Det fungerar!');

let urlApiKey = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let opApiKey = 'requestKey';

let finalUrlApiKey = `${urlApiKey}?${opApiKey}`;

console.log('Hämtar data från: ' + finalUrlApiKey);
fetch(finalUrlApiKey)
.then( responseApiKey => {
	console.log('Svar från servern:', responseApiKey);
	return responseApiKey.json();
} )
.then(function(objApiKey){

  console.log('svar som objekt',objApiKey);
	let outputApiKey = document.getElementById('responseApiKey');
	let statusApiKey = document.getElementById('statusApiKey');

statusApiKey.innerHTML = "<strong>Status:</strong> " + objApiKey.status + "<br><br>"
+ "<strong>Meddelande:</strong> " + objApiKey.message;


//lagra api-nyckel i konstant
const storageApiKey = objApiKey.key;

 outputApiKey.innerHTML = storageApiKey;

})


.catch( messageApiKey => {
	console.log('Något gick fel: ' + messageApiKey);
});

});

});



//................................................
//................................................
