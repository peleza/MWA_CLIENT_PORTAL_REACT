const server = {
    baseUrl: 'http://mwangaza-api.arkasoftwares.in/api',
//    baseUrl: 'http://192.168.2.233:3334/api',
    prod: ''
}

const baseUrl = () => {
    if (process.env.REACT_APP_URL === 'prod') {
        return server.prod
    } else {
        return server.baseUrl
    }
}

export default baseUrl;