import {API} from './config'


export default {
    listarDuvidas: () => {
        return API.get('duvidas/',{
          headers: {
              'Authorization': 'Token '+localStorage.getItem('token')
          }
      }
        )
    },

    getListaEmAlta: () => {
      return API.get('duvidas/em_alta/', {
        headers: {
            'Authorization': 'Token '+localStorage.getItem('token')
        }
    })
    },
    getDuvida: (duvidaId) => {
        return API.get(`duvidas/${duvidaId}/`, {
          headers: {
              'Authorization': 'Token '+localStorage.getItem('token')
          }
      })
    },
    criarDuvida: (duvida) => {
      return API.post('duvidas/' , duvida, {
        headers: {
            'Authorization': 'Token '+localStorage.getItem('token')
        }
    })
  }
}