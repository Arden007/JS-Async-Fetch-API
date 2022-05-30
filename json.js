let url = 'https://pokeapi.co/api/v2/pokemon/6';

fetch(url).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
    document.querySelector("#demo").innerHTML= `
        <h1>${ data.name }</h1>
        <div>
        // the name of the image
        <img src='${ data.sprites.front_default }'>
        <img src="${ data.sprites.back_shiny }">
        </div>
        <ul>
            <li>${ data.abilities[0].ability.name }</li>
            <li>${ data.abilities[1].ability.name }</li>
            <li>${ data.stats[0].base_stat }</li>
            <li>${ data.stats[3].effort }</li>
            <li>${ data.types[0].type.name }</li>
            <li>${ data.types[1].type.name }</li>
        </ul>
    `
    // dont forget to add string template(`) after .innerHTML and the end of the code

}).catch(err => {
    console.log(err)
})

