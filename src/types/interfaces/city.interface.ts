interface LocalNames {
  [key: string]: string
}

export interface City {
  name: string
  local_names: LocalNames
  lat: number
  lon: number
  country: string
  state: string
}
