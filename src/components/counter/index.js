import React, { Component } from 'react'
import './style.css'

export class Counter extends Component {
  state = {
    count: 0,
    difference: 0,
    start_count: 0
  }

  componentDidMount () {
    let time = this.props.time
    if (time.difference !== 0) {
      this.setState(
        {
          count: time.now - time.difference,
          start_count: time.now - time.difference
        },
        () => this.updateCounter()
      )
    } else {
      this.updateCounter()
    }
  }

  updateCounter = () => {
    let { time, next } = this.props
    let { difference, start_count, count } = this.state
    let speed
    let speed_kof = 0.5
    if (time.difference > 60) {
      speed_kof = 0.65
    }
    if (time.difference !== difference) {
      speed = (difference * 100) / time.difference
      setTimeout(() => {
        difference = difference + 1
        this.setState({ difference, count: start_count + difference }, () =>
          this.updateCounter()
        )
      }, speed / speed_kof)
    } else if (count === time.now) {
      next()
    }
  }

  render () {
    let { time, finishAnimation } = this.props
    return (
      <div className='counter__item'>
        {finishAnimation ? time.now : this.state.count}
        <span className='counter__item-bold'>{time.name}</span>
      </div>
    )
  }
}
