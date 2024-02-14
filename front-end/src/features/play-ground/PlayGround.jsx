import CatCard from './views/cat-card/CatCard';
import GreenBtn from '../../shared/components/green-btn/GreenBtn';
import './PlayGround.css'
import UserDetail from '../user/user-detail/UserDetail';
import usePlayGround from './hooks/usePlayGround';
import GameStatus from './views/game-status/GameStatus';

const PlayGround = () => {
  const { handleFlipCard, cardDetails, getStarted } = usePlayGround();

  return (
    <div className="play-ground">
      <UserDetail />
      <div className="cards">
        <div className="hidden-card">
          <CatCard displayed={false} />
          <div className="show-btn" onClick={handleFlipCard}>Flip</div>
        </div>
        <GameStatus />
        <div className="display-card">
          <CatCard displayed={true} cardType={cardDetails.cardFlipped} />
        </div>
      </div>

      <div className="start-play" onClick={getStarted}>
        <GreenBtn btnName="Restart Game" />
      </div>
    </div>
  )
}

export default PlayGround;

