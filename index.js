function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "https://reqbin.com/echo/get/json");
  xhttp.send();
}

window.loadDoc = loadDoc