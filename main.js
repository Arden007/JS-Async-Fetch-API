let url = "https://pokeapi.co/api/v2/pokemon/";
// I'm fetching the data I'm gonna use and assigning it with name's to use later in my code(the skeleton).
function getPokemonList(url) {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let { results, next, previous } = data;
      pokemonList(results, next, previous);
    });
}
console.log(getPokemonList)
// the name I assigned to info I fetch, basically it's the information i need 

getPokemonList(url);
// This is to call the function and make sure that the functions run in their order, it can be place at the bottom of your code does matter but if you do not call the function the info you pasted into all the functions won't run

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      fetch(data.species.url)
        .then((res) => res.json())
        .then((speciesData) => createPokemonDisplay(data, speciesData));
    });
}
console.log(getPokemonInfo)
// the name I assigned to info I fetch, basically it's the information i need 

function pokemonList(pokemon, next, previous) {
    let container = document.querySelector(".pokemon-list-container");
    container.innerHTML = "";
    // the above is selecting the Div I created and assigning it with a name container
    // the below is looping(map is a way of looping) over the data and assignig them to button's & displaying it in the HTML
    pokemon.map((btn) => {
      container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
    });
    container.innerHTML += `
        <div>
          <button onclick="getPokemonList('${previous}')" ${previous ? "" : "disabled"}>Previous</button>
          <button onclick="getPokemonList('${next}')" ${next ? "" : "disabled"}>Next</button>
        </div>`;
}
  
function createPokemonDisplay(pokemon, description) {
    document.querySelector(".pokemon-info").innerHTML = `
      <img src="${pokemon.sprites.front_default} ">
      <img src="${pokemon.sprites.back_default} ">
      <p>${description.flavor_text_entries[0].flavor_text}</p>
      `;
}
// the above splits up the the name i allocated to info I fetch so that I can display the indivdual data I want    