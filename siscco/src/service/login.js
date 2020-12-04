import {API} from './config'


export default {
    enviaTokenSabia: (userObj) => {
        console.log(userObj);
        return API.post('/sabia', userObj, {
            headers: {
                'Authorization': 'Token ad53fab4c0a5f5dccd3a3a895debefdc6f98a06e'
            }
        })
    },
}