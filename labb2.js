function myFunction() {
    let pee = document.getElementById("dunk");
    pee.style.backgroundColor = "hotpink";

    let el1 = document.getElementById('nisse'); // hitta rätt element
    let el2 = document.createElement('span');
    el2.innerHTML = ' - HACKED';
    el2.style.fontWeight = 'bold';

    el1.appendChild(el2);

  let btn = document.getElementById("btn");
    btn.addEventListener("click", callback);

}


//alert("welcome to Litterary memories");

let callback = function(event) {
//console.log('Something happened');
alert("tjoohoo  i superryjmden");
};
