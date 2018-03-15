window.addEventListener('load', function(event){

	//hämta api-nyckel
let failedFetchRequests = 1;



//rensa textobx(ar)
let clrBtnApiKey = document.getElementById("clearBtnApiKey");
clrBtnApiKey.addEventListener("click", function(event){

	let clearStatusApiKey = document.getElementById("statusApiKey");
	
	clearStatusText(clearStatusApiKey);
	
});



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


statusApiKey.innerHTML = objApiKey.status;

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


let clrListBtn = document.getElementById("clearBtnList");
clrListBtn.addEventListener("click", function(event){

	let fetchStatus = document.getElementById("status");
	
	clearStatusText(fetchStatus);
});





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
let status = document.getElementById('status');
//let key ='cg45j';  //ny nyckel
//let key ='fzJ8Z';  // FUNGERAR!!!

let finalUrl = `${url}?op=${op}&key=${key}`;
console.log('Hämtar data från: ' + finalUrl);

fetchUrlSelection(finalUrl, status);
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
	let statusUpdate = document.getElementById('updateStatusText');
	clearTextBox(textbox1Upd, statusUpdate);
	clearTextBox(textbox2Upd, statusUpdate);
	clearTextBox(textbox3Upd, statusUpdate);
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
if(isTextInputEmpty(idUpdate) || isTextInputEmpty(titleUpdate) || isTextInputEmpty(authorUpdate))
{
	statusUpdate.innerHTML = "Please fill in <strong>ALL</strong> text fields!";
}
else
{
	let finalUrlUpdate = `${urlUpdate}?op=${opUpdate}&key=${keyUpdate}&id=${idUpdate}&title=${titleUpdate}&author=${authorUpdate}`;

	console.log('Hämtar data från: ' + finalUrlUpdate);

	fetchUrl(finalUrlUpdate, statusUpdate);
}
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
	let insertStatusText= document.getElementById("insertStatusText");
	clearTextBox(textbox1, insertStatusText);
	clearTextBox(textbox2, insertStatusText);
});


addBtn.addEventListener("click", function() {


	let apiKey  = localStorage.getItem('mystorage');
	let baseUrl = 'https://www.forverkliga.se/JavaScript/api/crud.php';
	let titleText = document.getElementById("input1").value;
	let authorText = document.getElementById("input2").value;
	let insertStatusHeader = document.getElementById("insertStatusHeader");
	let insertStatusText= document.getElementById("insertStatusText");
	//alert("Button click");
	//resultFontEffect(insertStatusHeader);
	if (isTextInputEmpty(titleText) || isTextInputEmpty(authorText))
	{
		//alert("Skriv i båda textboxarna!")
		//alert("Error: Fill in both textboxes");
		insertStatusText.innerHTML = "Please fill in <strong>ALL</strong> text fields!";
	}
	else
	{

		//alert("Lägger till bok!");
		let requestUrl2=baseUrl+"?op=insert&key=" + apiKey + "&title=" + titleText + "&author=" + authorText;
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
		let statusDelete = document.getElementById('insertDeleteText');
		clearTextBox(textbox1Del, statusDelete);
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

if (isTextInputEmpty(idDelete))
{
	statusDelete.innerHTML = "Please fill in <strong>ALL</strong> text fields!";
}

else
{
	let finalUrlDelete = `${urlDelete}?op=${opDelete}&key=${keyDelete}&id=${idDelete}`;
	console.log('Hämtar data från: ' + finalUrlDelete);

	fetchUrl(finalUrlDelete, statusDelete);
}
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

// tar in två textinputs.
function isTextInputEmpty(input)
{
	if (input.length === 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

// Fetch requests för Insert, Update & Delete!
let fetchUrl = function(requestUrl, element)
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
				element.innerHTML = `Operation ${json.status}full after ${failedFetchRequests} tries!`;
				console.log("Operation " + json.status + "full after " + failedFetchRequests + "tries!");
				failedFetchRequests = 1;
				//alert(json.status);

			}
			else
			{
				// Testa 10 gånger!
				ajaxRepeat(json, requestUrl, element, fetchUrl);
			}

		}).catch(function(error)
		{
	  		element.innerHTML = 'There has been a problem with your fetch operation:<br><br> ' + error.message;
	  		//alert('There has been a problem with your fetch operation:<br><br>' + error.message);
		});
}	


	// FIXAR JAG!
	// Hämtar alla böcker!
	let fetchUrlSelection = function(selectUrl, status)
	{
		let output = document.getElementById('response');

		fetch(selectUrl)
		.then(function(response)
		{
			if(response.ok)
			{
				return response.json();
			}
		})
		.then(function(json)
		{
			if(json.status === "success")
			{
				status.innerHTML = `Operation ${json.status}full after ${failedFetchRequests} tries!`;
				loopBookList(json, output);
				failedFetchRequests = 1;
				//alert(json.status);
			}
			else
			{
				// Testa 10 gånger!
				ajaxRepeat(json, selectUrl, status, fetchUrlSelection);
			}

		}).catch(function(error)
		{
			element.innerHTML = 'There has been a problem with your fetch operation:<br><br> ' + error.message;
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

	function ajaxRepeat(json, requestUrl, element, callback)
	{

		if (failedFetchRequests <= 10)
		{
			failedFetchRequests ++;
			//element.innerHTML = "Fetch status: " + json.status + " Number of tries: " + failedFetchRequests + " Description: " + json.message;
			//alert("Fetch status: " + json.status + " Number of tries: " + failedFetchRequests + " Description: " + json.message);
			callback(requestUrl, element);
		}
		else
		{
			element.innerHTML = "Maximum amount of tries exceeded! " + json.status + ":  " + json.message;
			console.log("Maximum amount of tries exceeded! " + json.status + ":  " + json.message);
			failedFetchRequests = 1;
			return;
		}	
			
	}


	//clear textboxes
	function clearTextBox(textbox, statusText){

		textbox.value = "";
		statusText.innerHTML = "";
	}

	function clearStatusText(statusText){
		
		statusText.innerHTML = "";
	}




});  //pages load-function ends here!!
