const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function myFunction() {
  
    for (i = 1; i <= 10; i++) {
      var x = i;
      document.getElementById("demo").innerHTML += x + " ";
      } 
    }
    
    function myFunctionTwo() {
      var day = new Date();
      var monday = day.getDay()
      if (monday == 1){
      document.getElementById("demoTwo").innerHTML = "Today is Monday.";
    }
    }
    function myFunctionThree() {
      var day = new Date();
      var monday = day.getDay()
      var whatDay;
      if (monday == 1) {
        whatDay = "Today is Monday.";
      }
       else {  
        whatDay = "Today is not Monday.";
      }
      document.getElementById("demoThree").innerHTML = whatDay;
    }
    function myFunctionFour() {
      var day = new Date();
      var monday = day.getDay()
      var whatDay;
      if (monday == 1) {
        whatDay = "Today is Monday.";
      }
       else if (monday == 2 || monday == 3) {  
        whatDay = "Today is Tuesday or Wednesday. I'm not sure which.";
      }
      else {
        whatDay = "Today is not Monday, Tuesday, or Wednesday. It's some other day.";
      }
      document.getElementById("demoFour").innerHTML = whatDay;
    }
    function arrayItems() {
    var arrayName = ["firstItem", "secondItem", "thirdItem", "fourthItem"];
    var loop;
    loop = "<ul>";
      for (i = 0; i < arrayName.length; i++) {
      loop += "<li>" + arrayName[i] + "</li>";
    }
    loop += "</ul>";
    document.getElementById("demoFive").innerHTML = loop;
    }