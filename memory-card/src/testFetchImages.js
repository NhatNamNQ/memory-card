import {fetchPokemonImages} from "./components/api/fetchImages.js"

async function testFetch() {
    console.log("Fetching Pokemon images ...");
    const pokemons = await fetchPokemonImages(12);

    console.log("Pokemon data:", pokemons)
}

testFetch();