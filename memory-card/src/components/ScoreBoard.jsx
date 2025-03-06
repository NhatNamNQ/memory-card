export default function ScoreBoard({score, bestScore}) {
    return (
        <div className="flex justify-between p-4 text-lg font-bold bg-gray-500 rounded-lg">
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}