import React from 'react';
import './GameStatus.css'
import usePlayGround from '../../hooks/usePlayGround';

const GameStatus = () => {
    const {cardDetails} = usePlayGround();
    return (
        <div className="game-status">
            {/* <div className="status total-card"> Deck of Card : <span>5</span> </div> */}
            <div className="status available-card"> Available Card : <span>{cardDetails.cardArray.length}</span></div>
            <div className="status viewed-card">Viewed Card : <span>{5 - cardDetails.cardArray.length}</span></div>
            <div className="status viewed-card">Defuse Card : <span>{cardDetails.defuseCardNumber}</span> </div>
            <div className="status title">Status</div>

            <div className="status status-detail">{cardDetails.res}</div>
        </div>
    )
}

export default GameStatus;