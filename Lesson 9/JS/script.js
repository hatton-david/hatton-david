const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

const date = document.lastModified;
 document.getElementById("datetime").textContent = date;

 const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
    .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.forEach(town => {
      let square = document.createElement('section');
      let h2 = document.createElement('h2');
      let h2One = document.createElement('h2');
      let h2Two = document.createElement('h2');
      let image = document.createElement('img');
      
        let townname = `${town.name}`; 
        let founded = `Year Founded: ${town.yearFounded}`; 
        let pop = `Population: ${town.currentPopulation}`;
        let rfall = `Annual Rainfall: ${town.averageRainfall}`;

      h2.textContent = townname;
      image.setAttribute('src', town.photo);
      image.setAttribute('alt', townname);
      h2.textContent = founded;
      h2One.textContent = pop;
      h2Two.textContent = rfall;

      square.appendChild(h2);
      square.appendChild(h2One);
      square.appendChild(h2Two);
      square.appendChild(image);

      document.querySelector('.towns').appendChild(square);

    });
});