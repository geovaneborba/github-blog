import axios from 'axios'

// https://api.github.com/repos/geovaneborba/rocketseat-ignite-desafios/issues
// https://api.github.com/search/issues?q=Github%20blog%20repo:geovaneborba/rocketseat-ignite-desafios

export const api = axios.create({
  baseURL: 'https://api.github.com',
})
