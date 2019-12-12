import * as StoreCity from '@/types/store/city'

export interface GoogleMaps {
  getData(payload: StoreCity.Coordinates): Promise<any>
}