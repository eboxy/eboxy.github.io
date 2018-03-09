

//hämta api-nyckel

window.addEventListener('load', function() {

	let toggleDivVisible = document.getElementById('getAPiKeyVisible');
	toggleDivVisible.style.display='initial';
//toggleDivVisible.style.display='initial';

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


//lagra api-nyckel i local storage
//let storageApiKey = objApiKey.key;


const storageApiKey = 'fzJ8Z';
localStorage.setItem('mystorage', storageApiKey);
//alert(string);

outputApiKey.innerHTML = storageApiKey;
//skall vi ha denna pga säkerhetsaspekt??

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
let key = localStorage.getItem('mystorage');
//let key ='cg45j';  //ny nyckel
//let key ='fzJ8Z';  // FUNGERAR!!!

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
		loopBookList(obj, output);
		//output.innerHTML = restext + restext2;
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

/*

//uppdatera en bok i boklistan

window.addEventListener('load', function() {

	//let formUpdate = document.getElementById('form-2');
	let buttonUpdate = document.getElementById('updateButton');
	buttonUpdate.addEventListener('click', function() {



console.log('Det fungerar!');

let urlUpdate = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let opUpdate = 'update';
let keyUpdate = localStorage.getItem('mystorage');
let idUpdate = document.getElementById("updateBookId").value;
let titleUpdate = document.getElementById("updateBookTitle").value;
let authorUpdate = document.getElementById("updatebookAuthor").value;
console.log("check",authorUpdate );


//let key ='cg45j';  //ny nyckel
//let key ='fzJ8Z';  // FUNGERAR!!!


//let' key = storageApiKey;


let finalUrlUpdate = `${urlUpdate}?op=${opUpdate}&key=${keyUpdate}&id=${idUpdate}&title=${titleUpdate}&author=${authorUpdate}`;

console.log('Hämtar data från: ' + finalUrlUpdate);
fetch(finalUrlUpdate)
.then( responseUpdate => {
	console.log('Svar från servern:', responseUpdate);
	return  responseUpdate.json();
} )
.then(function(objUpdate){

  console.log('svar som objekt', objUpdate);
	//let outputUpdate = document.getElementById('responseUpdate');
	let statusUpdate = document.getElementById('updateStatusText');

statusUpdate.innerHTML = "<strong>Status:</strong> " + objUpdate.status + "<br><br>";




})


.catch(messageUpdate => {
	console.log('Något gick fel: ' + messageUpdate);
});

});

//});


*/

//................................................
//................................................

//lägg till en bok i boklistan

window.addEventListener('load', function()
{
// DOM elements
let addBtn = document.getElementById("addBtn");
//let apiKeyRequest = document.getElementById("reqapikey");

let apiKey  = localStorage.getItem('mystorage');

let titleText = document.getElementById("input1");
let authorText = document.getElementById("input2");
let insertStatusHeader = document.getElementById("insertStatusHeader");
let insertStatusText= document.getElementById("insertStatusText");

addBtn.addEventListener("click", function(event)
{
	alert("Button click");
	resultFontEffect(insertStatusHeader);
	if (isTextInputEmpty(titleText, authorText))
	{
		alert("Skriv i båda textboxarna!")
		//alert("Error: Fill in both textboxes");
		insertStatusText.innerHTML = "Please fill in both text fields!";
	}
	else
	{

		alert("Lägger till bok!");
		let requestUrl2=baseUrl+"?op=insert&key=" + apiKey + "&title=" + titleText.value + "&author=" + authorText.value;
		// Ajax Fetch here!
		alert(requestUrl2);
		fetchUrl(requestUrl2, insertStatusText);
		alert(requestUrl2);
	}
});
});

//................................................
//................................................

//Tag bort en bok:

window.addEventListener('load', function() {

	let buttonDelete = document.getElementById('buttonDelete');
				buttonDelete.addEventListener('click', function() {

console.log('Det fungerar!');

let urlDelete = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let opDelete = 'delete';
let keyDelete = localStorage.getItem('mystorage');
//let key ='cg45j';  //ny nyckel
//let key ='fzJ8Z';  // FUNGERAR!!!
let idDelete = document.getElementById("textDelete").value

let finalUrlDelete = `${urlDelete}?op=${opDelete}&key=${keyDelete}&id=${idDelete}`;
console.log('Hämtar data från: ' + finalUrlDelete);
fetch(finalUrlDelete)
.then( responseDelete => {
	console.log('Svar från servern:', responseDelete);
	return responseDelete.json();
} )
.then(function(objDelete){

  console.log('svar som objekt', objDelete);
	//let output = document.getElementById('response');
	let statusDelete = document.getElementById('insertDeleteText');

statusDelete.innerHTML = "<strong>Status:</strong> " + objDelete.status;



})

.catch( messageDelete => {
	console.log('Något gick fel: ' + messageDelete);
});

});

});










//................................................
//................................................


//FUNKTIONER:


function loopBookList(obj, output)
{

	let ul = document.createElement('ul');

	for (var i = 0; i < obj.data.length; i++){

		let id = obj.data[i].id;
		let author = obj.data[i].author;
		let title = obj.data[i].title;

		let text = id+" - " +author + ": " + title;

		let li = document.createElement('li');
		ul.appendChild(li);
		li.innerHTML = text;
	}
	output.innerHTML = ul.innerHTML;

	//alert(ul.innerHTML);
}




function isTextInputEmpty(input1, input2)
{
	if (input1.value.length === 0 || input2.value.length === 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}


function resultFontEffect(font)
{
	font.style.fontSize = "xx-small";
	font.innerHTML = "Status";
	for (var i = 0; i < 100; i++)
	{
		font.style.fontSize = "i";
	}
}


function fetchUrl(requestUrl, element)
{
		fetch(requestUrl)  // Funktionen fetch körs direkt
		.then(function(response)
		{
			// Den här koden körs när servern svarar
			if (response.ok)
			{
				return response.json();  // också ett promise
			}
		})
		.then(function(json)
		{
		// data/json är ett objekt som innehåller serverns svar
			if (json.status === "success")
			{
				element.innerHTML = json.status;
				alert(json.status);
			}
			else if(json.status === "error")
			{
				element.innerHTML = json.status;
				alert("Error: " + json.message);
			}
		}).catch(function(error)
		{
	  		element.innerHTML = 'There has been a problem with your fetch operation:<br><br>' + error.message;
	  		alert('There has been a problem with your fetch operation:<br><br>' + error.message);
		});
	}
