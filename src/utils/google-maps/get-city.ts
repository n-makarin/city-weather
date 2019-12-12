/**
 * Get city name from data gotten by specified coordinates
 * @param rawData {array|undefined}
 */
export default function (rawData: any): string {
  let result: string = ''
  for (let i = 0; i < rawData.length; i++) {
    const types = rawData[i].types
    if (types && types[0] === 'locality') {
      const adressComponents = rawData[i].address_components[0]
      if (adressComponents) {
        result = adressComponents.long_name
      }
    }
  }
  return result
}
