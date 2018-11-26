function searchJoke() {
    /* Using concatination to obtain the full website, using the method described on the API */
    var x = document.getElementById("myText").value;
    var y = "https://icanhazdadjoke.com/j/"
    var z = y.concat(x);
    /*I can assign my varible z - which contains the location of the website into the "webLink" Id tag*/
    document.getElementById("webLink").innerHTML = z;


    /*To interact with the API, I am using an XMLHttpRequest to asynchronously to make a GET call to my API to accept the JSON file, then proceed to pull the Joke Data from the JSON object using DOM methods*/
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            document.getElementById("jokeData").innerHTML = JSON.parse(this.responseText).joke;
            /* to resize the font size of the joke, I need use this DOM method so the CSS can give it a style*/
            document.getElementsByTagName("aside")[0].setAttribute("class", "DOMFontResize");
            /*This will allow me to set the variable z as a hyperlink in the html*/
            document.getElementById("webLink").innerHTML = z.link(z)
        }
    };
    xhttp.open("GET", z, true);
    xhttp.setRequestHeader('Accept','application/json');
    xhttp.send();
}




function loadJoke() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
        document.getElementById("jokeId").innerHTML = JSON.parse(this.responseText).id;
      document.getElementById("jokeData").innerHTML = JSON.parse(this.responseText).joke;
      tempJoke = JSON.parse(this.responseText).joke;
      document.getElementsByTagName("aside")[0].setAttribute("class", "DOMFontResize");
    }
  };
  xhttp.open("GET", "https://icanhazdadjoke.com/", true);
  xhttp.setRequestHeader('Accept', 'application/json');
  xhttp.send();
}

/* Using this global variable so that the addList() function can access the variables defined in loadJoke()*/
var tempJoke = '';

/*This function will allow me to create a list node, apply the joke to the node and append it to the myList html list*/
function addList() {
  var node = document.createElement("li");
  var textnode = document.createTextNode(tempJoke);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  tempJoke = 'Nothing to append';
}










