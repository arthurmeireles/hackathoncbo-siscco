import {API} from './config'


export default {
    listarDuvidas: () => {
        return API.get('duvidas/')
    },
}