var jwt = require('jwt-simple');

export function apiHeader(unAuth = null) {
    if (unAuth) {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    } else {
        const userData = localStorage.userData
        const decoded = jwt.decode(userData, process.env.REACT_APP_PRIVATE_KEY)
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + decoded.token
        };
    }
}