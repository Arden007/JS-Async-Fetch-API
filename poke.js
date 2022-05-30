let url = "https://pokeapi.co/api/v2/pokemon/"

function info(url) {
    fetch(url)
        .then((res) => res.json())
        // the info I fetch I'm converting into j.son format
        .then((data) => {
            let { next, previous, results } = data;
            // the info I want to use is being assigned to the name data
            pokemonList(next, previous, results);
            // the info I'm gonna use is being assigned a name but has not be defined yet
        });
}
// the function has being declared but means nothing if we don't call it
info(url);
// the above is how you call the function you delcared , we just code in the name(variable) and paramaters give and end it (info(url))
