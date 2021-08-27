import { useState, useEffect } from 'react';

import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

const FunctionalKuiper = () => {
  const [guess, setGuess] = useState('');
  const [finalGuess, setFinalGuess] = useState('');
  const [kuiper, setKuiper] = useState(kuiperSleep);

  useEffect(() => {
    if (guess === 'sleeping') {
      alert(`You got it! ${guess.toLocaleUpperCase()}! Congrats`);
    }
  }, [guess]);

  const onSubmit = event => {
    event.preventDefault();

    if (guess === 'sleeping') {
      setKuiper(kuiperHappy);
    } else if (guess === '') {
      alert("You didn't choose anything!");
    } else {
      alert('Nice try, But Wrong! Try again.');
      setGuess('');
    }
  };

  return (
    <>
      <div className='kuiper-container'>
        <form onSubmit={event => onSubmit(event)}>
          <label>
            <h1>Enter Kuiper's favorite activity</h1>
            <input
              type='text'
              value={guess}
              placeholder='Enter here'
              onChange={event => setGuess(event.target.value)}
            />
          </label>
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

        <img className='kuiper-image' width='450' height='450' src={kuiper} />
      </div>
    </>
  );
};

export default FunctionalKuiper;
