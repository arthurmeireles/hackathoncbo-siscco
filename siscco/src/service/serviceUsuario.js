import {API} from './config'

export default {
    getUsuario: (usuarioId) =>{
        return API.get(`users/${usuarioId}/`,
            {
              headers: {
                  'Authorization': 'Token '+localStorage.getItem('token')
              }
          }
        )
    }
}