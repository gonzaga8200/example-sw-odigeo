console.log('Desde aquí hago la llamada a ...');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         console.log(this.responseText);
    }
};
xhttp.open("GET", "/test/prueba.js", true);
xhttp.send();