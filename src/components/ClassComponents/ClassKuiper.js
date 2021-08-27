import { Component } from 'react';

import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

class Kuiper extends Component {
  constructor() {
    super();
    this.state = {
      guess: '',
      kuiper: kuiperSleep,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.guess === 'sleeping') {
      alert(`You got it! ${prevState.guess.toLocaleUpperCase()}! Congrats`);
      this.setState({ guess: '' });
    }
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.state.guess === 'sleeping') {
      this.setState({ kuiper: kuiperHappy, guess: '' });
    } else if (this.state.guess === '') {
      alert("You didn't choose anything!");
    } else {
      alert('Nice try, But Wrong! Try again.');
      this.setState({ kuiper: kuiperSleep, guess: '' });
    }
  };

  render() {
    return (
      <>
        <div className='kuiper-container'>
          <form onSubmit={event => this.onSubmit(event)}>
            <label>
              <h1>Enter Kuiper's favorite activity</h1>
              <input
                type='text'
                value={this.state.guess}
                placeholder='Enter here'
                onChange={event => this.setState({ guess: event.target.value })}
              />
            </label>
            <div>
              <button className='k-button' type='submit'>
                Guess
              </button>
              <button
                onClick={() => this.setState({ kuiper: kuiperSleep })}
                className='k-button'
                type='reset'
              >
                Reset
              </button>
            </div>
          </form>

          <img
            className='kuiper-image'
            width='450'
            height='450'
            src={this.state.kuiper}
          />
        </div>
      </>
    );
  }
}

export default Kuiper;
