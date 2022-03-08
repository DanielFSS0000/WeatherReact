import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import getCurrentDate from '../helpers/Date';

const useFetch = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const handleError = () => {
            console.log("No se pudo acceder a la ubicación")
        }
        
        const success = position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            axios.get(`api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
                .then(res => setData(res.data))
        }
        
        navigator.geolocation.getCurrentPosition(success, handleError)
    }, [])

    const temp = data?.main.temp - 273.15;
    const tempMin = data?.main.temp_min - 273.15;
    const tempMax = data?.main.temp_max - 273.15;
    const actualDate = getCurrentDate();
    const description = data?.weather[0].description;
    const feelsLike = data?.main.feels_like -273.15;
    const wind = data?.wind.speed;
    const humidity = data?.main.humidity;

    return ({ data, temp, tempMin, tempMax, actualDate, description, feelsLike, wind, humidity});
};

export default useFetch;
