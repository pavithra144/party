import axios from "axios"

const SetToken = (token) => {
if(token) {
    axios.defaults.headers.common['auth-token'] = token
} else {
    delete axios.defaults.headers.common['auth-token']
}
}

export default SetToken
