/**
 * Enshure that maps.googleapis.com script is emped to root index.html file
 * Doc: https://developers.google.com/maps/documentation/geocoding
 */
import * as Types from '@/types/api/google-maps'
import * as StoreCityTypes from '@/types/store/city'

// prepare window.google property type
declare global { interface Window { google: any } }

const googleMaps: Types.GoogleMaps = {
  /**
   * Returns data from maps.googleapis.com by latitude and longitude
   */
  getData ({ lat = 0, lng = 0 }: StoreCityTypes.Coordinates): Promise<any> {
    const geocoder = new window.google.maps.Geocoder()
    const latLng = new window.google.maps.LatLng(lat, lng)

    let promise = new Promise((resolve, reject): void => {
      geocoder.geocode({ location: latLng }, (results: any, status: string): void => {
        if (status === 'OK') {
          resolve(results)
        } else {
          reject(status)
        }
      })
    })
    return promise
      .catch((error) => {
        console.log('Can\'t get data by specified coordinates', `Status: ${error}`)
      })
      .then((res) => {
        return res
      })
  }
}

export default googleMaps
