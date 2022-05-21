import React, {useState} from "react";
import BoardButton from "./BoardButton";

function Board(){
    const [squares, setSquares] = useState<Array<string>>(Array(9).fill(""));


    function  handleOnClick(index: number){
        squares[index] = "X";
        setSquares([...squares])
        console.log('SQUARES :', squares);
    }
    function renderSquare(index: number) {
        return (
            <BoardButton value={squares[index]} onClick={() => handleOnClick(index)}/>
        )
    }

    return (
        <div>
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

export default Board;