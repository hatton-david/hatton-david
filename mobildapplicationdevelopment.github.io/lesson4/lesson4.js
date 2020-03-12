const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function loadXMLDoc(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      "Last modified: " + this.getResponseHeader('Last-Modified');
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function getData() {
    var xmlhttp = new XMLHttpRequest();
    var url = "test.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' + arr[i].display + '<br>';
        }
        document.getElementById("data").innerHTML = out;
    }
    };
