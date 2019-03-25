import React, { Component } from 'react'
import { TimeParser } from '../utils'
import { Counter } from '../components'
import './style.css'
export class Home extends Component {
  state = {
    time: [],
    current_number: 0
  }
  componentDidMount () {
    this.updateTime()
  }

  nextNumber = () => {
    let { current_number } = this.state
    current_number++
    this.setState({ current_number })
  }

  updateTime = () => {
    setInterval(() => {
      this.setState({ time: TimeParser() })
    }, 900)
  }

  render () {
    let { time, current_number } = this.state
    return time.length ? (
      <div className='wrapper'>
        <div className='counters'>
          {time.map((item, index) => {
            if (index <= current_number) {
              return (
                <Counter
                  time={item}
                  next={() => this.nextNumber()}
                  key={index}
                  finishAnimation={current_number === time.length}
                />
              )
            } else {
              return <div className='counter__empty' key={index} />
            }
          })}
        </div>
      </div>
    ) : (
      <></>
    )
  }
}
