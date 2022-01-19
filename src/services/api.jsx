import axios from 'axios'


const Api = axios.create({
    baseURL: 'https://fiu22vrwwf.execute-api.us-west-2.amazonaws.com'
})

export default Api