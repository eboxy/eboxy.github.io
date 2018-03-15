window.addEventListener('load', function(event){

	//hämta api-nyckel
let failedFetchRequests = 1;


//"navvigations-knapp" visar togglar "funktionalitet"
let apiKeyButton = document.getElementById("apiKeyVisibilityButton");
apiKeyButton.addEventListener('click', function(){
toggleFunctionalities('showAPiKey');
});


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


statusApiKey.innerHTML = "<strong>Status:</strong> " + objApiKey.status;

//lagra api-nyckel i local storage
let storageApiKey = objApiKey.key.toString();

localStorage.setItem('mystorage', storageApiKey);

outputApiKey.innerHTML = storageApiKey;
//skall vi ha denna pga säkerhetsaspekt??

})
.catch( messageApiKey => {
	console.log('Något gick fel: ' + messageApiKey);
});
});
//................................................
//................................................

//hämta boklistan


//"navvigations-knapp" visar togglar "funktionalitet"
let listButton = document.getElementById("listVisibilityButton");
listButton.addEventListener('click', function(){
toggleFunctionalities('showGetBookList');
});


	let selectButton = document.getElementById('btn');
	selectButton.addEventListener('click', function() {

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
	let mess = document.getElementById('mess');

if(obj.status === "success")
{
	loopBookList(obj, output);

	status.innerHTML = "<strong>Status: </strong> " + obj.status;
	mess.innerHTML = "<strong>Meddelande:</strong> " + obj.message;

}
else
{
	status.innerHTML = "<strong>Status: </strong> " + obj.status;
	mess.innerHTML = "<strong>Meddelande:</strong> " + obj.message;

	output.innerHTML = "";
}

})
.catch( message => {
	console.log('Något gick fel: ' + message);
});
});
//................................................
//................................................

//uppdatera en bok i boklistan


//"navvigations-knapp" visar togglar "funktionalitet"
let updateButton = document.getElementById("updateVisibilityButton");
updateButton.addEventListener('click', function(){
toggleFunctionalities('showUpdateBook');
});


//ändrar bakgrundsfärg på textboxar när de är i fokus
changeTextBoxBackgroundColor("updateBookId");
changeTextBoxBackgroundColor("updateBookTitle");
changeTextBoxBackgroundColor("updatebookAuthor");

//rensa textobx(ar)
let clrBtnUpdate = document.getElementById("clrBtnUpdateBook");
clrBtnUpdate.addEventListener("click", function(event){

	let textbox1Upd = document.getElementById("updateBookId");
	let textbox2Upd = document.getElementById("updateBookTitle");
	let textbox3Upd = document.getElementById("updatebookAuthor");
	clearTextBox(textbox1Upd);
	clearTextBox(textbox2Upd);
	clearTextBox(textbox3Upd);
});


	let buttonUpdate = document.getElementById('updateButton');
	buttonUpdate.addEventListener('click', function() {

console.log('Det fungerar!');

let urlUpdate = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let opUpdate = 'update';
let keyUpdate = localStorage.getItem('mystorage');
let idUpdate = document.getElementById("updateBookId").value;
let titleUpdate = document.getElementById("updateBookTitle").value;
let authorUpdate = document.getElementById("updatebookAuthor").value;

//let outputUpdate = document.getElementById('responseUpdate');
let statusUpdate = document.getElementById('updateStatusText');

let finalUrlUpdate = `${urlUpdate}?op=${opUpdate}&key=${keyUpdate}&id=${idUpdate}&title=${titleUpdate}&author=${authorUpdate}`;

console.log('Hämtar data från: ' + finalUrlUpdate);

fetchUrl(finalUrlUpdate, statusUpdate);
});


//................................................
//................................................

//lägg till en bok i boklistan


//"navvigations-knapp" visar togglar "funktionalitet"
let addButton = document.getElementById("addVisibilityButton");
addButton.addEventListener('click', function(){
toggleFunctionalities('showAddBook');
});


//ändrar bakgrundsfärg på textboxar när de är i fokus
changeTextBoxBackgroundColor("input1");
changeTextBoxBackgroundColor("input2");


let addBtn = document.getElementById("addBtn");


//rensa textobx(ar)
let clrBtn = document.getElementById("clrBtnAddBook");
clrBtn.addEventListener("click", function(){

	let textbox1 = document.getElementById("input1");
	let textbox2 = document.getElementById("input2");
	clearTextBox(textbox1);
	clearTextBox(textbox2);
});


addBtn.addEventListener("click", function() {


	let apiKey  = localStorage.getItem('mystorage');
	let baseUrl = 'https://www.forverkliga.se/JavaScript/api/crud.php';
	let titleText = document.getElementById("input1");
	let authorText = document.getElementById("input2");
	let insertStatusHeader = document.getElementById("insertStatusHeader");
	let insertStatusText= document.getElementById("insertStatusText");
	//alert("Button click");
	//resultFontEffect(insertStatusHeader);
	if (isTextInputEmpty(titleText, authorText))
	{
		//alert("Skriv i båda textboxarna!")
		//alert("Error: Fill in both textboxes");
		insertStatusText.innerHTML = "Please fill in both text fields!";
	}
	else
	{

		//alert("Lägger till bok!");
		let requestUrl2=baseUrl+"?op=insert&key=" + apiKey + "&title=" + titleText.value + "&author=" + authorText.value;
		// Ajax Fetch here!
		//alert(requestUrl2);
		fetchUrl(requestUrl2, insertStatusText);
		//alert(requestUrl2);
	}
});

//................................................
//................................................

//Tag bort en bok:



//"navvigations-knapp" visar togglar "funktionalitet"
let deleteButton = document.getElementById("deleteVisibilityButton");
deleteButton.addEventListener('click', function(){
toggleFunctionalities('showDeleteBook');
});


	//ändrar bakgrundsfärg på textboxar när de är i fokus
	changeTextBoxBackgroundColor("textDelete");
	//rensa textobx(ar)
	let clrBtDelete = document.getElementById("buttonClear");
	clrBtDelete.addEventListener("click", function(event){

		let textbox1Del = document.getElementById("textDelete");
		clearTextBox(textbox1Del);
	});


		let buttonDelete = document.getElementById('buttonDelete');
	  buttonDelete.addEventListener('click', function() {

console.log('Det fungerar!');

let urlDelete = 'https://www.forverkliga.se/JavaScript/api/crud.php';
let opDelete = 'delete';
let keyDelete = localStorage.getItem('mystorage');
//let key ='cg45j';  //ny nyckel
//let key ='fzJ8Z';  // FUNGERAR!!!
let idDelete = document.getElementById("textDelete").value
let statusDelete = document.getElementById('insertDeleteText');

let finalUrlDelete = `${urlDelete}?op=${opDelete}&key=${keyDelete}&id=${idDelete}`;
console.log('Hämtar data från: ' + finalUrlDelete);

fetchUrl(finalUrlDelete, statusDelete);
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
				console.log("Fetch status: " + json.status);
				failedFetchRequests = 0;
				//alert(json.status);

			}
			else
			{
				// Testa 10 gånger!
				ajaxRepeat(json, requestUrl, element);
			}

		}).catch(function(error)
		{
	  		element.innerHTML = 'There has been a problem with your fetch operation:<br><br>' + error.message;
	  		//alert('There has been a problem with your fetch operation:<br><br>' + error.message);
		});
}

	// FIXAR JAG!
	function fetchUrlSelect(selectUrl, element)
	{
		fetch(selectUrl)
		.then(function(response)
		{

		})
		.then(function(json)
		{

		}).catch(function(error)
		{

		});
	}

// togglar synligheten för "funktionaliteten" i fråga
function toggleFunctionalities(showFunctionality){
		let toggle = document.getElementById(showFunctionality);

		if(toggle.style.display==='initial'){
			toggle.style.display='none';
		}
		else
		{
		toggle.style.display='initial';
	}
  }




	//ändrar bakgrundfärg när textboxar är markerade och i fokus
	function changeTextBoxBackgroundColor(textboxToChange){
			let textboxcCangeFocus = document.getElementById(textboxToChange);
			textboxcCangeFocus.addEventListener('focus', function(event) {
				textboxcCangeFocus.style.backgroundColor = "#ffffb3";
			});
			textboxcCangeFocus.addEventListener('blur', function(event) {
				textboxcCangeFocus.style.backgroundColor = "";
			});
	}




	function ajaxRepeat(json, requestUrl, element)
	{

		if (failedFetchRequests < 10)
		{
			failedFetchRequests ++;
			element.innerHTML = "Fetch status: " + json.status + " Number of tries: " + failedFetchRequests + " Description: " + json.message;
			//alert("Fetch status: " + json.status + " Number of tries: " + failedFetchRequests + " Description: " + json.message);
			fetchUrl(requestUrl, element);
		}
		else
		{
			element.innerHTML = "Maximum amount of tries exceeded, Operation Failed!";
			console.log("Maximum amount of tries exceeded, Operation Failed!");
			failedFetchRequests = 0;
			return;
		}

	}



	//clear textboxes
	function clearTextBox(textbox){
		textbox.value = "";
	}





});  //pages load-function ends here!!
