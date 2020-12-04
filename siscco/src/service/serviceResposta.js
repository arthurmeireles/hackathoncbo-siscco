import {API} from './config'


export default {
    responder: (resposta) => {
      return API.post('respostas/' , resposta, {
        headers: {
            'Authorization': 'Token '+localStorage.getItem('token')
        }
    })
  }
}
