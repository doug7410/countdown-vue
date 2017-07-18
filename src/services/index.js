import axios from 'axios'
import { apiDomain } from '../config.js'

const http = axios.create({
  baseURL: apiDomain
})

export default http
