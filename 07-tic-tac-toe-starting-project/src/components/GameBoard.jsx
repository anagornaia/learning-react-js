import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameboard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameboard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map(
                    (row, rowIndex) =>
                        <li key={rowIndex}>
                            <ol>
                                {
                                    row.map(
                                        (playerSymbol, columnIndex) =>
                                            <li key={columnIndex}>
                                                <button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                                            </li>
                                    )}
                            </ol>
                        </li>
                )}
        </ol>
    )
}