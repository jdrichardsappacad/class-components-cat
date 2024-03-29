import { useState, useEffect } from 'react';

import titanChill from '../../assets/titan_chill.jpg';
import titanHungry from '../../assets/titan_hungry.MOV';

const FunctionalTitan = () => {
  const [mood, setMood] = useState('CHILL');
  const [display, setDisplay] = useState('block');
  const [isHungry, setIsHungry] = useState(true);

  useEffect(() => {
    const mood = setTimeout(() => {
      setMood('MAD');
    }, 7000);

    return () => clearTimeout(mood);
  }, []);

  return (
    <>
      <div className='titan-container'>
        {isHungry ? (
          <h1>If You Don't Feed Titan Soon, He Will Get Mad!</h1>
        ) : (
          <h1>Yum! That's better!</h1>
        )}
        <h2> Current mood: {mood} </h2>

        {mood === 'CHILL' ? (
          <div className='titan-chill'>
            <img width='690' height='390' src={titanChill} alt='titan-chill' />
            <div className='button-holder'>
              <button
                style={{ display: display }}
                className='mover t-button'
                onClick={() => setMood('CHILL')}
              >
                Click to Feed Titan!
              </button>
            </div>
          </div>
        ) : (
          <>
            <video width='690px' height='390px' controls autoPlay muted>
              <source src={titanHungry} type='video/mp4' />
            </video>
            <br />
            <button
              className='f-button'
              onClick={() => {
                setMood('CHILL');
                setIsHungry(false);
                setDisplay('none');
              }}
            >
              Now Feed Titan
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default FunctionalTitan;
