import * as Types from '@/types/api/open-weather'
/**
 * @param rawData {array|undefined}
 */
export default function (rawData: any): Types.Weather|void {
  const data: any = rawData.list[0]
  if (!data) { return }
  const feelsLike: number = Number(data.main.feels_like)
  const temp: number = Number(data.main.temp)

  let result: Types.Weather = {
    description: data.weather[0].description,
    rain: !!data.rain,
    snow: !!data.snow,
    temp: {
      feelsLike: Math.floor(feelsLike),
      tepm: Math.floor(temp)
    },
    wind: {
      speed: data.wind.speed,
      dir: getWindDirection(data.wind.deg)
    }
  }
  return result
}

/**
 * Calculate wind direction by degrees
 */
export function getWindDirection (deg: number): string {
  const int: number = ((deg / 22.5) + 0.5)
  const arr: string[] = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  return arr[Math.floor(int % 16)]
}
