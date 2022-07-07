import axios from 'axios'
const HOST = 'http://django-web.std-1367.ist.mospolytech.ru/api'
export const state = () => ({cars: []})


export const getters = {
  getOrders: async () => {
    return await axios.get(`${HOST}/order`)
  },
  getDrivers: async () => {
    return await axios.get(`${HOST}/driver`)
  },
  getCars: async () => {
    return await axios.get(`${HOST}/car/?limit=90`)
  },
}

export const actions = {
  newCar: async (_, el) => {
    try{return await axios.post(`${HOST}/car/`, el)}catch(e){console.log(e)}
  },

}

