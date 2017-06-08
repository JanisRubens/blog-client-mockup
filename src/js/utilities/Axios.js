import AuthService from 'utilities/AuthService.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Authorization'] = AuthService.getTokenURI();
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios