import { useState, useEffect, useRef } from 'react';

import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

const FunctionalKuiper = () => {
  const countRef = useRef();
  const prevGuessCount = countRef.current;
  const [guess, setGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [kuiper, setKuiper] = useState(kuiperSleep);

  useEffect(() => {
    countRef.current = guessCount;
    if (
      prevGuessCount !== guessCount &&
      guess !== 'sleeping' &&
      guessCount !== 0
    ) {
      alert(
        `Nice try but wrong! You have made ${guessCount} guess(es) thus far!`
      );
    }
  }, [guess, prevGuessCount, guessCount]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (guess === 'sleeping') {
      alert(
        `Congratulations! ${guess.toUpperCase()}! You got it in ${
          guessCount + 1
        } guess(es)`
      );
      setKuiper(kuiperHappy);
      setGuess('');
      setGuessCount(0);
    } else if (guess === '') {
      alert("You didn't make a guess!");
    } else {
      setKuiper(kuiperSleep);
      setGuess('');
      setGuessCount(guessCount + 1);
    }
  };

  return (
    <>
      <div className='kuiper-container'>
        <form onSubmit={(event) => onSubmit(event)}>
          {kuiper !== kuiperHappy && (
            <label>
              <h1>Enter Kuiper's favorite activity</h1>
              <input
                type='text'
                value={guess}
                placeholder='Enter here'
                onChange={(event) => setGuess(event.target.value)}
              />
            </label>
          )}

          <div>
            <button className='k-button' type='submit'>
              Guess
            </button>
            <button
              onClick={() => setKuiper(kuiperSleep)}
              className='k-button'
              type='reset'
            >
              Reset
            </button>
          </div>
        </form>

        <img
          className={
            kuiper === kuiperHappy ? 'kuiper-image rotate' : 'kuiper-image'
          }
          alt='kuiper'
          width='450'
          height='450'
          src={kuiper}
        />
      </div>
    </>
  );
};

export default FunctionalKuiper;
