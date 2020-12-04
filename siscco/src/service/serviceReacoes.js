import {API} from './config'


export default {
  
    curtirDuvida: (duvidaId) => {
        return API.get(`duvidas/like/?duvida_id=${duvidaId}`, {
          headers: {
              'Authorization': 'Token '+localStorage.getItem('token')
          }
        })
    },
    // Vai dizer que é ruim
    discurtiDuvida: (duvidaId) => {
      return API.get(`duvidas/dislike/?duvida_id=${duvidaId}`, {
          headers: {
              'Authorization': 'Token '+localStorage.getItem('token')
          }
      })
    },



    curtirResposta: (respostaId) => {
      return API.get(`respostas/like/?resposta_id=${respostaId}`,{
        headers: {
            'Authorization': 'Token '+localStorage.getItem('token')
        }
    }
      
      )
  },
  // Vai dizer que é ruim
  discurtiResposta: ( respostaId) => {
    return API.get(`respostas/dislike/?resposta_id=${respostaId}`, {
        headers: {
            'Authorization': 'Token '+localStorage.getItem('token')
        }
    })
  },
}