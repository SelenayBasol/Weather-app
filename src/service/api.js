import axios from 'axios';

const API_KEY = "8d2a110b6ad468ae1a0e459757cf659d" ;
const URL = 'http://api.openweathermap.org/data/2.5/weather';


export const getData = async(city,country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}