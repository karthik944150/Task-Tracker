import {Link} from 'react-router-dom'

import {QRCode} from 'react-qr-code'
import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="qr-section">
      <h1>Sacn the QR to Play the KBC Game</h1>
      <QRCode
        value="https://karthik4304orjscpm1v9k.drops.nxtwave.tech/game"
        size={200}
      />
      <div className="play-game-button-container">
        <p className="play-game-button-container-description or-option">or</p>
        <p className="play-game-button-container-description">
          Click here to play the Game
        </p>
        <Link to="/game">
          <button className="play-game-button" type="button">
            Play Game
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
