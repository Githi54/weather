interface ILocalNames {
  [key: string]: string
}

export interface ICity {
  name: string
  local_names: ILocalNames
  lat: number
  lon: number
  country: string
  state: string
}
