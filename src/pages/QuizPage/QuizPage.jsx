import { useState } from 'react';
import classes from '../../styles/Quiz/QuizPage.module.css';
import { questions } from '../../utils/data.js';

const QuizPage = () => {
  const [data, setData] = useState(questions);
  const [counter, setCounter] = useState(0);
  const [playBtn, setPlayBtn] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [points, setPoints] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  let arr = [];
  const correctAnsewrsArr = (data) => {
    data.forEach((elem) => {
      arr.push(elem.correctAnswer);
    });
    return arr;
  };
  correctAnsewrsArr(data);

  const handleBtnPlay = () => {
    setPlayBtn(false);
    setShowQuiz(true);
  };

  const handleBtnTry = () => {
    setResult(false);
    setShowQuiz(true);
    setPoints(0);
  };

  const handleRadioChange = (option) => {
    setSelectedOption(option);
    setCounter((prev) => prev + 1);
    if (arr.includes(option)) {
      setPoints((prev) => prev + 1);
    }
    if (counter === 9) {
      setResult(true);
      setShowQuiz(false);
      setCounter(0);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.quizBlock}>
        {showQuiz && (
          <div className={classes.quiz}>
            <h3>
              Question № {counter + 1} {data[counter].question}
            </h3>
            <div className={classes.optionBlock}>
              {data[counter].options.map((question, i) => (
                <label htmlFor={i} className={classes.label} key={i + question}>
                  <input
                    type="radio"
                    name="group"
                    id={i}
                    className={classes.inp}
                    checked={selectedOption === i}
                    onChange={() => handleRadioChange(question)}
                  />
                  <h4>{question}</h4>
                </label>
              ))}
            </div>
          </div>
        )}
        {playBtn && (
          <button className={classes.btn} onClick={handleBtnPlay}>
            Play
          </button>
        )}
        {result && (
          <>
            {' '}
            <h3>
              Your result is: {points}/{data.length}
            </h3>
            <button className={classes.btn} onClick={handleBtnTry}>
              Try again
            </button>{' '}
          </>
        )}
      </div>
    </div>
  );
};
export default QuizPage;
