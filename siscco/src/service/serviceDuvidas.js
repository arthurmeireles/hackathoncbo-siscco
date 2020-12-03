import {API} from './config'


export default {
    listarDuvidas: () => {
        return API.get('duvidas/')
    },

    getListaEmAlta: () => {
      return API.get('duvidas/em_alta/')
    },
    getDuvida: (duvidaId) => {
        return API.get(`duvidas/${duvidaId}/`)
    }
}