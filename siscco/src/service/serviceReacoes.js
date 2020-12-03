import {API} from './config'


export default {
  
    curtirDuvida: (usuarioId, duvidaId) => {
        return API.get(`duvidas/like?user_id=${usuarioId}&duvida_id=${duvidaId}`)
    },

    // Vai dizer que é ruim
    discurtiDuvida: (usuarioId, duvidaId) => {
      return API.get(`duvidas/like?user_id=${usuarioId}&duvida_id=${duvidaId}`)
    },
}