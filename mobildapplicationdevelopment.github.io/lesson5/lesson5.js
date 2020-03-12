const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function getName() {
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Hatton");
    // Retrieve
    document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("demo").innerHTML = "Not supported.";
  }
  }
  function saveUsername() {
      if (typeof (Storage) !== "undefined") {
          var y = document.getElementById('saveUn');
          localStorage.setItem("uN", y.value);
      } else {
          var output = "Not supported.";
          document.getElementById("username").innerHTML = output;
      }
  }
  function showUsername() {
      var showName = localStorage.getItem("uN");
      document.getElementById("username").innerHTML = "Your Username is: " + localStorage.getItem("uN");
  }
  
  function saveArray() {
      if (typeof (Storage) !== "undefined") {
          var firstName = document.getElementById("fName").value;
          var middleName = document.getElementById("sName").value;
          var lastName = document.getElementById("lName").value;
          var nameArray = [firstName, middleName, lastName];
          var nameArrayString = JSON.stringify(nameArray);
          localStorage.setItem("nameArray", nameArrayString);
          console.log(nameArrayString);
      } else {
          var output = "Not supported.";
          document.getElementById("arrayOutput").innerHTML = output;
      }
  }
  
  function displayArray() {
      var names = localStorage.getItem("nameArray");
      console.log(names);
      var namesArray = JSON.parse(names);
      console.log(namesArray);
      var number = parseFloat(document.getElementById('nameNumbers').value);
      var output = namesArray[number];
      document.getElementById("showArray").innerHTML = output;
  }

  function saveAArray() {
    if (typeof (Storage) !== "undefined") {
        var first = document.getElementById("nameOne").value;
        var middle = document.getElementById("nameTwo").value;
        var last = document.getElementById("nameThree").value;
        var array = {
            nameOne: first,
            nameTwo: middle,
            nameThree: last,
        };
        console.log(array)
        var arrayString = JSON.stringify(array);
        localStorage.setItem("aArray", arrayString);
    } else {
        var output = "Not supported.";
        document.getElementById("assocArrayOutput").innerHTML = output;
    }
}

function showAArray() {
    var getArray = localStorage.getItem("aArray");
    console.log(getArray);
    var nameAArray = JSON.parse(getArray);
    console.log(nameAArray);
    var fnameAA = nameAArray.nameOne;
    var mnameAA = nameAArray.nameTwo;
    var lnameAA = nameAArray.nameThree;
    console.log(fnameAA, mnameAA, lnameAA);
    document.getElementById("nameOutput").innerHTML = fnameAA + " " + mnameAA + " " + lnameAA;   
}