<script setup lang="ts">
import { IWeatherInfo } from '@typify/interfaces'
import {
  getSelectedCurrentWeather,
  selectCurrentWeather,
  removeSelectedWeather,
} from '@api/services'
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import { storeToRefs } from 'pinia'
import classNames from 'classnames'
import { ref } from 'vue'
import { CONTENT_LIMIT, EModalTexts, MIN_CONTENT } from '@app/constants'
import TempChart from '@components/ui-kits/TempChart.vue'
import {
  transformFromKelvinToCelsiusWeather,
  formatTimeToAmPmShort,
} from '@app/helpers'
import ModalAlert from '@components/ui-kits/ModalAlert.vue'

const store = useCitiesWeather()
const { removeCity } = store
const { citiesWeather } = storeToRefs(store)
const selectedCities = ref(getSelectedCurrentWeather() as IWeatherInfo[])
const selectedCitiesIDs = ref(
  selectedCities.value.map(({ city: { id } }) => id),
)
const showModal = ref(false)
const modalText = ref('')
const removedID = ref<number | null>(null)

const handleCloseModal = () => (showModal.value = false)

const handleClickSelectBtn = (weatherData: IWeatherInfo) => {
  const {
    city: { id: weatherID },
  } = weatherData

  if (selectedCitiesIDs.value.includes(weatherID)) {
    if (selectedCitiesIDs.value.length === MIN_CONTENT) {
      showModal.value = true
      modalText.value = EModalTexts.MIN_SELECTED
    }

    if (selectedCities.value.length > 1) {
      removeSelectedWeather(weatherID)

      selectedCitiesIDs.value = selectedCitiesIDs.value.filter(
        (id) => id !== weatherID,
      )
    }
  } else {
    selectCurrentWeather(weatherData)

    if (selectedCitiesIDs.value.length !== CONTENT_LIMIT) {
      selectedCitiesIDs.value = [...selectedCitiesIDs.value, weatherID]
    } else {
      showModal.value = true
      modalText.value = EModalTexts.MAX_SELECTED
    }
  }

  const newArr = getSelectedCurrentWeather()

  selectedCities.value = newArr
}

const handleClickDeleteBtn = (id: number) => {
  modalText.value = EModalTexts.DELETE_ITEM
  showModal.value = true
  removedID.value = id
}

const handleDeleteCity = () => {
  if (
    removedID.value &&
    selectedCities.value.length === MIN_CONTENT &&
    selectedCitiesIDs.value.includes(removedID.value)
  ) {
    modalText.value = EModalTexts.DELETE_FAILED

    return
  }

  if (removedID.value) {
    removeCity(removedID.value)
    showModal.value = false
  }
}
</script>

<template>
  <div
    v-for="weatherData of citiesWeather"
    :key="weatherData.city.id"
    class="content-container"
  >
    <div class="weather-actions">
      <button
        class="weather-action weather-delete"
        @click="() => handleClickDeleteBtn(weatherData.city.id)"
      >
        Delete
      </button>
      <button
        class="weather-action weather-select"
        :class="
          classNames({
            'weather-selected': selectedCitiesIDs.includes(weatherData.city.id),
          })
        "
        @click="handleClickSelectBtn(weatherData)"
      >
        Select{{ selectedCitiesIDs.includes(weatherData.city.id) ? 'ed' : '' }}
      </button>
    </div>
    <div class="weather-content">
      <WeatherCard :current-weather="weatherData" />
      <TempChart
        :labels="
          weatherData.list
            .slice(0, 12)
            .map(({ dt_txt }) => formatTimeToAmPmShort(dt_txt.split(' ')[1]))
        "
        :data="
          weatherData.list
            .slice(0, 12)
            .map(({ main: { temp } }) =>
              transformFromKelvinToCelsiusWeather(temp),
            )
        "
      />
    </div>

    <ModalAlert
      v-if="showModal"
      :text="modalText"
      @handle-close="handleCloseModal"
    >
      <div
        v-if="modalText === EModalTexts.DELETE_ITEM"
        class="modal-agreement-action"
      >
        <button class="btn" @click="handleDeleteCity">Yes</button>
        <button class="btn" @click="handleCloseModal">No</button>
      </div>
    </ModalAlert>
  </div>
</template>

<style>
.weather-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 10px;

  width: 100%;
}

.weather-action {
  all: unset;

  font-weight: 500;
  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;
}

.weather-select:hover {
  color: yellowgreen;
}

.weather-select:active {
  color: green;
}

.weather-selected {
  color: green;
}

.weather-delete {
  color: red;
}

.weather-delete:hover {
  color: firebrick;
}

.weather-delete:active {
  color: darkred;
}

.weather-content {
  display: flex;
  align-items: center;

  width: 100%;

  gap: 30px;
}

@media (max-width: 1000px) {
  .weather-content {
    flex-direction: column;
  }
}

.modal-agreement-action {
  display: flex;
  align-items: center;

  gap: 10px;

  margin-top: 40px;
}
</style>
