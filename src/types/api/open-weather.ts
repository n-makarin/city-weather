export interface Weather {
  description: string
  rain: boolean
  snow: boolean
  temp: Temperature
  wind: Wind
}
export interface Temperature {
  feelsLike: number
  tepm: number
}
export interface Wind {
  speed: number
  dir: string
}