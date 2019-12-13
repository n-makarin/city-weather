/**
 * Doc: https://openweathermap.org/
 */
import axios from 'axios'

const endpoint: string = 'https://api.openweathermap.org/'
const path = 'data/2.5/'
const query: string = 'find?q='
const units: string = 'metric'
const apiKey = 'a61d02c437c46d28055a9d7248221c39'

const openWeather: any = {
  /**
   * Get current weather by city name
   */
  async getCurrentByCityName (cityName: string): Promise<any> {
    let rawData: any
    await axios({
      method: 'GET',
      url: `${endpoint}${path}${query}${cityName}&units=${units}&appid=${apiKey}`
    })
      .catch((error) => {
        console.log(`Can't get data by city name: ${cityName}. Error: ${error}`)
      })
      .then((result) => {
        if (!result || !result.data) { return }
        rawData = result.data
      })
    return rawData
  }
}

export default openWeather
