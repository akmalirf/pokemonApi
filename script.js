
function getRandomPokemon() {
  const rand = Math.floor(Math.random() * 100) + 1;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${rand}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const pokemonName = data.name;
      const pokemonImages = data.sprites;
      const pokemonAbilities = data.abilities;
      const pokemonHeight = data.height;
      const pokemonWeight = data.weight;

      document.getElementById('pokemonName').innerHTML = `
              <h1>${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            `;
      document.getElementById('carouselInner').innerHTML = `
              <div class="carousel-item active">
                <img src="${pokemonImages.front_default}" class="d-block w-100" alt="${pokemonName+'/front.img'}">
              </div>
              <div class="carousel-item">
                <img src="${pokemonImages.back_default}" class="d-block w-100" alt="${pokemonName+'/back.img'}">
              </div>
            `;
      document.getElementById('abilitiesBody').innerHTML = '';
      pokemonAbilities.forEach(ability => {
        const listItem = document.createElement('li');
        listItem.innerText = ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1);
        document.getElementById('abilitiesBody').appendChild(listItem);
      });
      document.getElementById('physicalAttributesBody').innerHTML = `
              <li>Height: ${pokemonHeight}</li>
              <li>Weight: ${pokemonWeight}</li>
            `;
      document.getElementById('apiLink').href = apiUrl;
    });
}

document.getElementById('gachaButton').addEventListener('click', getRandomPokemon);
