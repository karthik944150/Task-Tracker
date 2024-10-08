import {useState} from 'react'
import './index.css'

const questions = [
  {
    question: 'What is the capital of India?',
    options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    correctAnswer: 'New Delhi',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Great White Shark', 'Giraffe'],
    correctAnswer: 'Blue Whale',
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      'Charles Dickens',
      'William Shakespeare',
      'Leo Tolstoy',
      'Mark Twain',
    ],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'HO2'],
    correctAnswer: 'H2O',
  },
  {
    question: 'Which organ is responsible for pumping blood in the human body?',
    options: ['Liver', 'Heart', 'Lungs', 'Kidneys'],
    correctAnswer: 'Heart',
  },
  {
    question: 'What is the largest continent by area?',
    options: ['Africa', 'Asia', 'North America', 'Europe'],
    correctAnswer: 'Asia',
  },
  {
    question: 'Who was the first person to walk on the moon?',
    options: [
      'Neil Armstrong',
      'Buzz Aldrin',
      'Yuri Gagarin',
      'Michael Collins',
    ],
    correctAnswer: 'Neil Armstrong',
  },
  {
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'],
    correctAnswer: 'Mitochondria',
  },
  {
    question: "Which element is represented by the symbol 'Fe'?",
    options: ['Fluorine', 'Iron', 'Francium', 'Fermium'],
    correctAnswer: 'Iron',
  },

  {
    question: 'Who painted the Mona Lisa?',
    options: [
      'Vincent van Gogh',
      'Leonardo da Vinci',
      'Pablo Picasso',
      'Claude Monet',
    ],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'Which is the smallest country in the world?',
    options: ['Vatican City', 'Monaco', 'Malta', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    options: ['Gold', 'Iron', 'Diamond', 'Granite'],
    correctAnswer: 'Diamond',
  },
  {
    question: 'How many bones are there in the human body?',
    options: ['206', '210', '208', '230'],
    correctAnswer: '206',
  },
  {
    question: 'Which planet is closest to the sun?',
    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
    correctAnswer: 'Mercury',
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1912', '1915', '1905', '1920'],
    correctAnswer: '1912',
  },
  {
    question: 'What is the largest desert in the world?',
    options: ['Sahara', 'Antarctic Desert', 'Arabian Desert', 'Gobi Desert'],
    correctAnswer: 'Antarctic Desert',
  },
  {
    question: 'Who developed the theory of relativity?',
    options: [
      'Isaac Newton',
      'Galileo Galilei',
      'Albert Einstein',
      'Niels Bohr',
    ],
    correctAnswer: 'Albert Einstein',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    options: ['Tomato', 'Avocado', 'Cucumber', 'Lettuce'],
    correctAnswer: 'Avocado',
  },
  {
    question: 'Which language has the most native speakers?',
    options: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'],
    correctAnswer: 'Mandarin Chinese',
  },
]

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [isPlayerJoined, setPlayer] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [playerEmail, setPlayerEmail] = useState('')

  const optionLabels = ['A', 'B', 'C', 'D']

  const handleAnswerClick = answer => {
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer
    setUserAnswer(answer)
    if (isCorrect) {
      setScore(score + 10000)
    } else {
      setShowScore(true)
    }
  }

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
      setUserAnswer(null)
    } else {
      setShowScore(true)
    }
  }

  const onClickPlayNewGame = () => {
    setShowScore(false)
    setCurrentQuestionIndex(0)
    setScore(0)
    setUserAnswer(null)
  }

  const onClickPlayGame = () => {
    if (playerName !== '' && playerEmail !== '') {
      setPlayer(true)
    }
  }

  const onChangePlayerName = event => {
    setPlayerName(event.target.value)
  }

  const onChangeEmail = event => {
    setPlayerEmail(event.target.value)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <>
      {!isPlayerJoined ? (
        <div className="form-container">
          <div className="student-details">
            <label className="input-label" htmlFor="playername">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="playername"
              className="input-element"
              value={playerName}
              onChange={onChangePlayerName}
            />
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              className="input-element"
              value={playerEmail}
              onChange={onChangeEmail}
            />
            <button
              type="button"
              className="next-btn"
              onClick={onClickPlayGame}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="App">
          <div className="player-info">
            <h1>KBC GAME</h1>
            <h1>Player Name: {playerName}</h1>
          </div>

          {showScore ? (
            <div className="money-card">
              <img
                src="https://4.imimg.com/data4/WL/NQ/MY-24546893/gold-coins.jpg"
                alt="coins-img"
                className="money-img"
              />
              <h1 className="money-owned">You won: {score}/- Rs</h1>
              <p className="money-owned">
                Good luck for next time to win more money
              </p>
              <button
                className="next-btn"
                type="button"
                onClick={onClickPlayNewGame}
              >
                New Game
              </button>
            </div>
          ) : (
            <div className="game-details">
              <h3 className="kbc-question">{currentQuestion.question}</h3>
              <div className="options">
                {currentQuestion.options.map((option, index) => (
                  <button
                    type="button"
                    className={`option-btn ${
                      userAnswer === option ? 'selected' : ''
                    }`}
                    onClick={() => handleAnswerClick(option)}
                  >
                    {optionLabels[index]}. {option}
                  </button>
                ))}
              </div>
              {userAnswer && (
                <div className="feedback">
                  {userAnswer === currentQuestion.correctAnswer ? (
                    <div>
                      <p className="correct">Congratulations!</p>
                      <button
                        className="next-btn"
                        onClick={handleNextQuestion}
                        type="button"
                      >
                        {currentQuestionIndex < questions.length - 1
                          ? 'Next Question'
                          : 'Show Money'}
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="wrong">Sorry, that was incorrect!</p>
                      <button
                        className="next-btn"
                        onClick={onClickPlayNewGame}
                        type="button"
                      >
                        New Game
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Game
