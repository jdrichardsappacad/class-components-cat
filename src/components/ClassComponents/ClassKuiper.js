import { Component } from 'react';

import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

class Kuiper extends Component {
  constructor() {
    super();
    this.state = {
      guessCount: 0,
      guess: '',
      kuiper: kuiperSleep
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.guessCount !== this.state.guessCount &&
      this.state.guess !== 'sleeping' &&
      this.state.guessCount !== 0
    ) {
      alert(
        `Nice try but wrong! You have made ${this.state.guessCount} guess(es) thus far!`
      );
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.guess === 'sleeping') {
      alert(
        `Congratulations! ${this.state.guess.toUpperCase()}! You got it in ${
          this.state.guessCount + 1
        } guess(es) !`
      );
      this.setState({
        kuiper: kuiperHappy,
        guess: '',
        guessCount: 0
      });
    } else if (this.state.guess === '') {
      alert("You didn't choose anything!");
    } else {
      this.setState({
        kuiper: kuiperSleep,
        guess: '',
        guessCount: this.state.guessCount + 1
      });
    }
  };

  render() {
    return (
      <>
        <div className='kuiper-container'>
          <form onSubmit={(event) => this.onSubmit(event)}>
            {this.state.kuiper !== kuiperHappy && (
              <label>
                <h1>Enter Kuiper's favorite activity</h1>
                <input
                  type='text'
                  value={this.state.guess}
                  placeholder='Enter here'
                  onChange={(event) =>
                    this.setState({ guess: event.target.value })
                  }
                />
              </label>
            )}
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
            className={
              this.state.kuiper === kuiperHappy
                ? 'kuiper-image rotate'
                : 'kuiper-image '
            }
            alt='kuiper'
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
