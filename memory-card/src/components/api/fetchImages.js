// fetchImages.js
export async function fetchPokemonImages(limit = 12) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await res.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonRes = await fetch(pokemon.url);
        const pokemonData = await pokemonRes.json();

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.other["official-artwork"].front_default,
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokémon images:", error);
    return [];
  }
}
