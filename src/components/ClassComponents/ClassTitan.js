import { Component } from 'react';

import titanChill from '../../assets/titan_chill.jpg';
import titanHungry from '../../assets/titan_hungry.MOV';

class Titan extends Component {
  constructor() {
    super();
    this.state = {
      mood: 'CHILL',
      display: 'block',
      isHungry: true
    };
  }

  componentDidMount() {
    this.setMood = setTimeout(() => {
      this.setState({ mood: 'MAD', display: 'none' });
    }, 7000);
  }

  componentWillUnmount() {
    clearTimeout(this.setMood);
  }

  render() {
    return (
      <>
        <div className='titan-container'>
          {this.state.isHungry ? (
            <h1>If You Don't Feed Titan Soon, He Will Get Mad!</h1>
          ) : (
            <h1>Yum! That's better!</h1>
          )}
          <h2> Current mood: {this.state.mood} </h2>

          {this.state.mood === 'CHILL' ? (
            <div className='titan-chill'>
              <img width=' 690' height=' 390' src={titanChill} alt='titan' />
              <div className='button-holder'>
                <button
                  style={{ display: this.state.display }}
                  className='mover t-button'
                  onClick={() => this.setState({ mood: 'CHILL' })}
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
                onClick={() =>
                  this.setState({ mood: 'CHILL', isHungry: false })
                }
              >
                Now Feed Titan
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Titan;
