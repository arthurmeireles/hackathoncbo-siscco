import {API} from './config'


export default {
    listarDuvidas: () => {
        return API.get('/duvidas/')
    },
    visualizarDuvida: (id) => {
      return API.get('/duvidas/${id}')
    },
    likeDuvida: (user_id, duvida_id) => {
      return API.get(`/duvidas/like?user_id=${user_id}&duvida_id=${duvida_id}`)
    },
    dislikeDuvida: (user_id, duvida_id) => {
      return API.get(`/duvidas/dislike?user_id=${user_id}&duvida_id=${duvida_id}`)
    },
}
