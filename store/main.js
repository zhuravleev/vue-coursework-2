import axios from 'axios'
const HOST = 'http://django-web.std-1367.ist.mospolytech.ru/api'

export const getters = {
  getOrders: async () => {
    return await axios.get(`${HOST}/order`)
  },
  getDrivers: async () => {
    return await axios.get(`${HOST}/driver`)
  },
  getCars: async () => {
    return await axios.get(`${HOST}/car`)
  },
}
