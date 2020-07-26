import axios from 'axios';

export default axios.create({
    //TODO: env variable
    baseURL: `http://localhost:8080/api/v1`
});