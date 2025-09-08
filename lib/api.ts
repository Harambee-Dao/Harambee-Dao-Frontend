import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "/",
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  // Rely on secure HTTP-only cookies for auth; just include credentials
  config.withCredentials = true
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  },
)

export default api




