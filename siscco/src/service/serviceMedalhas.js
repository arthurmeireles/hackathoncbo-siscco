import {API} from './config'


export default {
  getMedalhas: (usuarioId) => {
        return API.get(`users/${usuarioId}/`)
    }
}