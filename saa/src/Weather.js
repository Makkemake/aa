import React, {Component} from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <div className="Weather_focused">
          <div className="Weather_day">ma</div>
          <div className="Weather_time">12:00</div>
          <div className="Weather_temp">14°</div>
          <img src ='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
        </div>
      </div>
    )
  }
}

export default Weather
