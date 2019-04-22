import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8088/api/'
})

api.interceptors.request.use(req => {
  req.headers = req.headers || {}
  let token = localStorage.getItem('X-token')
  let tenantId = localStorage.getItem('tenantId')
  if (token != null) {
    req.headers['Authorization'] = `Bearer ${token}`
  }
  if (tenantId != null) {
    req.headers['tenantId'] = `${tenantId}`
  }
  return req
})

api.interceptors.response.use((res => {
  console.log(res)
  if (res.data && res.data.token) {
    localStorage.setItem('X-token', res.data.token)
    if(res.data.tenant){
    localStorage.setItem('tenantId', res.data.tenant)
  }}
  return res
}), error => {
  localStorage.removeItem('X-token')
})
export default api
