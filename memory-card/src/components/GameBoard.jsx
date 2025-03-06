import { useEffect, useState } from 'react'
import Card from './Card'
import { fetchPokemonImages } from './api/fetchImages';

export function GameBoard() {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const pokemon = await fetchPokemonImages(12);
            setCards(pokemon);
        }
        fetchData();
    }, [])

    function handleCardClick(id) {
        if (selectedCards.includes(id)) {
            setScore(0);
            setSelectedCards([]);
        } else {
            const newScore = score + 1;
            setScore(newScore);
            setSelectedCards([...selectedCards, id]);
        }
    }

    return (
        <div className=''>
            <div className='grid grid-cols-4'>
                {cards.map((card) => (
                    <Card key={card.id} pokemon={card} onClick={handleCardClick} />
                ))}
            </div>
            <div>{score}</div>
        </div>
    )
}