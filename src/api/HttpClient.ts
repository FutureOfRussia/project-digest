import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default function () {
  const config = {
    baseURL: '',
    header: {
      'Content-Type': 'application/json',
    },
  }

  const axiosInstance = axios.create(config)

  axiosInstance.interceptors.request.use(async (_conf) => {
    const token = await AsyncStorage.getItem('token')
    const conf = _conf

    if (token) conf.headers.Authorization = `Bearer ${token}`

    return conf
  }, (error) => Promise.reject(error))

  axiosInstance.interceptors.response.use((response) => response, async (error) => (
    Promise.reject(error)
  ))

  return axiosInstance
}
