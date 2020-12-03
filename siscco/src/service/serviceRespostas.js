import {API} from './config'


export default {
    listarResposta: () => {
        return API.get('/respostas/')
    },
    visualizarResposta: (id) => {
      return API.get('/respostas/${id}')
    },
    likeResposta: (user_id, resposta_id) => {
      return API.get('/respostas/like?user_id=${user_id}&resposta_id=${resposta_id}')
    },
    dislikeResposta: (user_id, resposta_id) => {
      return API.get('/respostas/dislike?user_id=${user_id}&resposta_id=${resposta_id}')
    },
}
