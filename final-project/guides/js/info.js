const requestURL = 'https://hatton-david.github.io/final-project/guides/json/info.json';
fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
    .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    guides.forEach(guide => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h5One = document.createElement('h5');
      let h5Two = document.createElement('h5');
      let h5Three = document.createElement('h5');
      let h5Four = document.createElement('h5');
      let image = document.createElement('img');
      
        let fullname = `${guide.name} ${guide.lastname}`; 
        let certification = `Certification: ${guide.certification}` 
        let exp = `Years of Experience: ${guide.exp}`;
        let email = `email: ${guide.email}`;
        let bio = `Bio: ${guide.bio}`;

      h2.textContent = fullname;
      image.setAttribute('src', guide.imageurl);
      image.setAttribute('alt', fullname);
      h5One.textContent = certification;
      h5Two.textContent = exp;
      h5Three.textContent = email;
      h5Four.textContent = bio;

      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(h5One);
      card.appendChild(h5Two);
      card.appendChild(h5Three);
      card.appendChild(h5Four);
      

      document.querySelector('.cards').appendChild(card);

    });



});