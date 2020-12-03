import {API} from './config'


export default {
    enviaTokenSabia: (userObj) => {
        console.log(userObj);
        return API.post('/sabia', userObj, {
            headers: {
                'Authorization': 'Token 69beb31cc4c7725d43a4e02e9447a87b76076dad'
            }
        })
    },
}