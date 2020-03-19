const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function myFunction() {
  var color = {
      firstColor: "Red",
      secondColor: "White",
      thirdColor: "blue"
  };

  document.getElementById("demo").innerHTML = "The colors of the American Flag are " +
      color.firstColor + ", " + color.secondColor + " and " + color.thirdColor + " .";
}

function otherFunction() {
  var person = {
      fName: "David",
      lName: "Hatton",
      fullName: function() {
          return this.fName + " " + this.lName;
      }
  };

  document.getElementById("other").innerHTML = person.fullName();
}

function oFunction() {
  var per = {
      fName: "David",
      lName: "Hatton",
      age: 34
  };

  document.getElementById("dem").innerHTML = per.fName + "  " + per.lName + " is " + per.age + " years old.";
}

function pFunction() {
  var per = {
      fName: "David",
      lName: "Hatton",
      age: 34
  };

  document.getElementById("dems").innerHTML = per["fName"] + " " + per["lName"] + " is " + per["age"] + " years old.";
}

function eFunction() {
  var per = {
      fName: "David",
      lName: "Hatton",
      age: 34
  };
per.eyecolor = "Brown";
document.getElementById("de").innerHTML =
per.fName + "'s eye color is " + per.eyecolor + ".";
}