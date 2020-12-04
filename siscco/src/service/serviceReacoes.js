import {API} from './config'


export default {
  
    curtirDuvida: (duvidaId) => {
        return API.get(`duvidas/like?user_id=${usuarioId}&duvida_id=${duvidaId}`, {
          headers: {
              'Authorization': 'Token '+localStorage.getItem('token')
          }
      }
        
        )
    },
    // Vai dizer que é ruim
    discurtiDuvida: ( duvidaId) => {
      return API.get(`duvidas/like?user_id=${usuarioId}&duvida_id=${duvidaId}`, {
          headers: {
              'Authorization': 'Token '+localStorage.getItem('token')
          }
      })
    },



    curtirResposta: (duvidaId) => {
      return API.get(`duvidas/like?user_id=${usuarioId}&duvida_id=${duvidaId}`,{
        headers: {
            'Authorization': 'Token '+localStorage.getItem('token')
        }
    }
      
      )
  },
  // Vai dizer que é ruim
  discurtiResposta: ( duvidaId) => {
    return API.get(`duvidas/like?user_id=${usuarioId}&duvida_id=${duvidaId}`, {
        headers: {
            'Authorization': 'Token '+localStorage.getItem('token')
        }
    })
  },
}