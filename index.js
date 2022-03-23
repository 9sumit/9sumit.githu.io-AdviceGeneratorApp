// here i got my dice button element
var dice = document.getElementById("forward");

// default quote and id onloading page
document.getElementById("number").innerHTML = "Advice #" + 01;
document.getElementById("quote").innerHTML = 'Frontend Mentor challenges help you improve your coding skills by building realistic projects.';


// and then added an event listener of click which listen when a user click on it
// and binded it with a callback function 
dice.addEventListener("click", displayQuote);

function displayQuote() {
	// my random quote generator api url who give me random quotes with a parameter of length
    var url = "https://api.quotable.io/random?maxLength=90";
    // here i created a request object
    const xhttp = new XMLHttpRequest();

// it manage my output when server send a 200 status code which means all ok
    xhttp.onload = function() {
        let Randomnumber = Math.floor((Math.random() * 1000) + 1);
        const Quoteobj = JSON.parse(this.responseText);
        document.getElementById("number").innerHTML = "Advice #" + Randomnumber;
        document.getElementById("quote").innerHTML = Quoteobj.content;


    }
// open request
    xhttp.open("GET", url);
 // and finally sending the request
    xhttp.send();
}