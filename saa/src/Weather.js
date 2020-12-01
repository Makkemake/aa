import React, {Component} from 'react'
import {getForecasts} from './requests'
import './Weather.css'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forecasts: null,
      focusedForecastDt: null
    }
  }
  componentDidMount() {
    getForecasts().then(forecasts => {
      console.log(forecasts) //testaus
      this.setState({ forecasts: forecasts, focusedForecastDt: forecasts.list[0].dt })
    })
  }

  formatDay = timestamp => {
  const datetime = new Date(timestamp*1000)
  const day = datetime.getDate()
  const month = datetime.getMonth()+1
  return day + '.' + month
}

formatTime = timestamp => {
  const datetime = new Date(timestamp*1000)
  const hours = datetime.getHours()
  let minutes = datetime.getMinutes()
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  return hours + ':' + minutes
}

  renderWeatherItem(forecast) {
    return (
      <div className="Weather_box" key={forecast.dt} onClick={() => this.changefocusedForecast(forecast)}>
        <div className="Weather_day">{this.formatDay(forecast.dt)}</div>
        <div className="Weather_time">{this.formatTime(forecast.dt)}</div>
        <div className="Weather_temp">{Math.round(forecast.main.temp)}°</div>
        <img src={'http://openweathermap.org/img/wn/'+forecast.weather[0].icon+'.png'} alt="Logo" />
      </div>
    )
  }

changefocusedForecast = forecast => {
  this.setState({focusedForecastDt: forecast.dt})
}

  render() {
    const forecasts = this.state.forecasts
    const focusedForecastDt = this.state.focusedForecastDt
    if (!forecasts) return null
    console.log(forecasts)

    const focusedWeather = forecasts.list.find(f => f.dt === focusedForecastDt)




    return (
      <div className="Weather">
        <div className="Weather_focused">
          <div className="Weather_day">{this.formatDay(focusedWeather.dt)}</div>
          <div className="Weather_time">{this.formatTime(focusedWeather.dt)}</div>
          <div className="Weather_temp">{Math.round(focusedWeather.main.temp)}</div>
          <div className="Weather_desc">{focusedWeather.weather[0].description}</div>
          <img src ='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
        </div>

        <div className="Weather_forecast">
          { forecasts.list.map(forecast => this.renderWeatherItem(forecast)) }
        </div>







        <div className="Weather_forecast">

          <div className="Weather_box">
            <div className="Weather_day">ma</div>
            <div className="Weather_time">15:00</div>
            <div className="Weather_temp">16°</div>
            <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
          </div>
          <div className="Weather_box">
            <div className="Weather_day">ma</div>
            <div className="Weather_time">18:00</div>
            <div className="Weather_temp">15°</div>
            <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
          </div>
          <div className="Weather_box">
            <div className="Weather_day">ma</div>
            <div className="Weather_time">21:00</div>
            <div className="Weather_temp">14°</div>
            <img src='http://openweathermap.org/img/wn/09d.png' alt="Logo" />
          </div>

        </div>

      </div>
    )
  }
}

export default Weather
