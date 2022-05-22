import React, {useState} from "react"
import BoardButton from "./BoardButton"

function Board(){
    const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null));
    const [xIsNext, setNext] = useState<boolean>(true)

    function handleOnClick(index: number) {
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        const squaresCopy = squares.slice();
        squaresCopy[index] = xIsNext ? "X" : "O"
        setSquares(squaresCopy)
        setNext(!xIsNext)
        console.log('SQUARES :', squares);
    }
    const renderSquare = (index: number) => {
        return (
            <BoardButton value={squares[index]} onClick={() => handleOnClick(index)}/>
        )
    }
    const WinnerLabel = () => {
        const winner = calculateWinner(squares)
        if (winner) {
            return <p>{ 'Winner: ' + winner} </p>
        } else  {
            return <p>{'Next player: ' + (xIsNext ? 'X' : 'O') }</p>
        }
    }

    return (

        <div>
            {WinnerLabel()}
            <div className="status"/>
            <div className="buttonRow">

                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="buttonRow">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="buttonRow">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )

}
function calculateWinner(squares : Array<String>) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Board;