let button = document.querySelector('#search');
  let img = document.querySelector('#myimg');
  let name = document.querySelector('#name');
  let type = document.querySelector('#type');
  let stats = document.querySelector('#stats');
  
  button.addEventListener('click', () => {
    let input = document.querySelector('#input').value.trim().toLowerCase();
    if (input) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => response.json())
        .then(data => {
          let pokemonName = data.forms[0].name;
          name.innerHTML = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
          console.log(name);
          img.src = data.sprites.front_default;
          type.innerHTML = "<span style='color: yellow; font-weight: bold;'>Type: " + "</span>" + "<span style='color: green; background-color: yellow; padding: 10px; border-radius: 20px;'>" + data.types[0].type.name + "<span>" ;
          stats.innerHTML = data.stats[0].stat.name + ": " + data.stats[0].base_stat + "<br>" + data.stats[1].stat.name + ": " + data.stats[1].base_stat + "<br>" + data.stats[2].stat.name + ": " + data.stats[2].base_stat + "<br>" + data.stats[3].stat.name + ": " + data.stats[3].base_stat + "<br>" + data.stats[4].stat.name + ": " + data.stats[4].base_stat + "<br>" + data.stats[5].stat.name + ": " + data.stats[5].base_stat;
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please enter a valid Pokemon name");
    }
  });

     
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }