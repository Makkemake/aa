export const API_KEY = process.env.REACT_APP_KEY

export const getForecast = () => new Promise(resolve => {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?id=658225&APPID=${API_KEY}&units=metric&lang=fi`)
    .then(response => {
      if (response.status !== 200) throw new Error(response.status)
      return response.json()
    })
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      console.warn(error)
    })
  })
