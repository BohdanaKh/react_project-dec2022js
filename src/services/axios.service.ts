import axios, {AxiosError} from 'axios';

import {baseURL, urls} from '../constants';




const axiosService = axios.create({baseURL});


axiosService.interceptors.request.use(config => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDY0MTgwZDE1NjM0NjA2ZWIyNmQ3YzkzZTE4ZTNkYiIsInN1YiI6IjY0NWZjNGQwNmUwZDcyMDBlMzFjNGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mD2hnaH_8Ilz7ZnbwvOyuKOznRJPrdGPwqInCVE1FL8';

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
    console.log(config);
})



export {
    axiosService
}
