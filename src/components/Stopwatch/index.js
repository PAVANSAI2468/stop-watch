import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {min: 0, sec: 0, timerId: null}

  startTimer = () => {
    const {timerId} = this.state

    // Prevent multiple intervals being set
    if (!timerId) {
      const newTimerId = setInterval(() => {
        this.setState(prevState => {
          const {sec, min} = prevState

          if (sec === 59) {
            return {min: min + 1, sec: 0}
          }
          return {sec: sec + 1}
        })
      }, 1000)

      // Save the timerId to state
      this.setState({timerId: newTimerId})
    }
  }

  stopTimer = () => {
    const {timerId} = this.state
    if (timerId) {
      clearInterval(timerId)
      this.setState({timerId: null})
    }
  }

  resetTimer = () => {
    this.stopTimer()
    this.setState({min: 0, sec: 0})
  }

  render() {
    const {min, sec} = this.state

    return (
      <div className="bg">
        <h1>Stop Watch</h1>
        <div className="card">
          <div className="title">
            <img
              className="imagetimer"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <div>
            <h1>
              {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
            </h1>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="startbtn"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button type="button" className="stopbtn" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              type="button"
              className="resetbtn"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
