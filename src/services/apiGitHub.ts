import axios from 'axios';

 const api = axios.create({
   baseURL:'https://api.github.com/user/repos/',
   method: 'get',
   //Falta arrumar a autenticação.
 })

export default api;