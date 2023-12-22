export const MIN_CONTENT = 1
export const CONTENT_LIMIT = 5
export const BASE_URL = import.meta.env.VITE_BASE_WEATHER_URL

export enum ELocalStorageItems {
  SELECTED_CITIES = 'selectedCities',
}

export enum EErrors {
  FAIL_ADD = 'Failed city add',
}

export enum EModalTexts {
  MAX_SELECTED = `You can selected no more than ${CONTENT_LIMIT} cities`,
  MIN_SELECTED = `You should have minimum ${MIN_CONTENT} selected city`,
  DELETE_ITEM = 'Are you sure want to delete this info?',
  DELETE_FAILED = 'You can not delete alone selected city',
}
