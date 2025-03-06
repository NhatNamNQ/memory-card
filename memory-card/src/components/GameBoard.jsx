import { useEffect, useState } from 'react'
import Card from './Card'
import { fetchPokemonImages } from './api/fetchImages';
import ScoreBoard from './ScoreBoard';

export function GameBoard() {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const pokemon = await fetchPokemonImages(12);
            setCards(shuffleCards(pokemon));
        }
        fetchData();
    }, [])

    function handleCardClick(id) {
        if (bestScore >= 12) {
            setScore(0);
            setBestScore(0);
        }

        if (selectedCards.includes(id)) {
            setScore(0);
            setSelectedCards([]);
        } else {
            const newScore = score + 1;
            if (newScore > bestScore) {
                setBestScore(newScore);
            }
            setScore(newScore);
            setSelectedCards([...selectedCards, id]);
        }
        setCards(shuffleCards(cards));
    }

    function shuffleCards(cards) {
        return [...cards].sort(() => Math.random() - 0.5)
    }

    return (
        <div className='m-2'>
            {bestScore === 12 ? 
            (<p className='text-center p-4 text-lg font-bold bg-gray-500 rounded-lg'>You win. Click any cards to reset this game.</p>)
                : (<ScoreBoard score={score} bestScore={bestScore} />)}
            <div className='grid grid-cols-4 gap-0.5 mt-2'>
                {cards.map((card) => (
                    <Card key={card.id} pokemon={card} onClick={handleCardClick} />
                ))}
            </div>
        </div>
    )
}