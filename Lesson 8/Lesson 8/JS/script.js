let update = document.lastModified;
document.getElementById("datetime").innerHTML = update;

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'.'+dd+'.'+yyyy;
document.getElementById("dateTime").textContent = today;

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
