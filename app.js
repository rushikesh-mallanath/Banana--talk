var btnTranslate = document.querySelector("#click-here");
var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?"+ "text="+ input
}

function errorHandler(error){
    console.log("error occrured", error)
    alert("Wait for sometime and try again")
}

function clickHandler() {
    var inputText = txtInput.value;


    fetch (getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}


// function clickHandler() {
//     outputDiv.innerText = "acgglhc"+ txtInput.value;
// };

btnTranslate.addEventListener("click", clickHandler)