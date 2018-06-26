import axios from 'axios'

export function queryCartServer(param) {
  const url = '/api/car-server/search/cart-server'
  console.log('param',param)
  return axios.post(url, {
    params: ''
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
