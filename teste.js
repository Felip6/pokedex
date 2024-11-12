async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    try {
         const response = await fetch(url);
         if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
         }

         const json = await response.json();
         console.log(json);

        const listContainer = document.getElementById('lista');

        json.results.forEach(async(pokemon)=> {
      

        const currentpokemon = await fetch (pokemon.url);
        const currenpokemonjson = await currentpokemon.json() 

        console.log(currenpokemonjson)

        const element =` 
        <li>
        <p>N°: ${currenpokemonjson.id}</p>
        <img src="${currenpokemonjson.sprites.other.home.front_default}" alt"foto do pokemon"/>
        <h2> ${currenpokemonjson.name}</h2>
        </li>
        `
         listContainer.innerHTML += element
});

    }catch (error) {
     console.error(error.menssage);
    }
}

getData()


