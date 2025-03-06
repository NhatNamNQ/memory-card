export default function Card({ pokemon, onClick }) {
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <div
            className="p-4 bg-gray-600 rounded-lg shadow-lg cursor-pointer"
            onClick={() => onClick(pokemon.id)}
        >
            <img className="w-24 h-24"
                src={pokemon.image}
                alt={pokemon.name} />
            <p className="text-center font-bold">{pokemonName}</p>
        </div>
    )
}