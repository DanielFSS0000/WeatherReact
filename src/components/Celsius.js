import React from 'react';
import useFetch from '../hooks/useFetch';
import frio from '../images/tempmin.png';
import calor from '../images/tempmax.png';


const Celsius = ( { units, setUnits } ) => {
    const { data, temp, tempMin, tempMax, actualDate, description, feelsLike, wind, humidity } =useFetch();

    const changeUnits = () => {
        setUnits(!units);
    }

    return (
        <div className='card'>
            <div className='location'>
                <ul className='location-info'>
                    <li className='city'>{data?.name}, {data?.sys.country}</li>
                    <li className='date'>{actualDate}</li>
                </ul>
                <ul className='temp-range'>
                    <li className='icon'><img src={frio} alt='' /></li>
                    <li className='min'>{tempMin.toFixed(2)}°C <span>Temp. min</span></li>
                    <li className='max'>{tempMax.toFixed(2)}°C <span>Temp. max</span></li>
                    <li className='icon'><img src={calor} alt='' /></li>
                </ul> 
            </div>

            <main className='description'>
                <ul>
                    <li><img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" /></li>
                    <li>{description}</li>
                </ul>
                <ul>
                    <li className='temp'>{temp.toFixed(2)}°C</li>
                    <li>Sensación térmica {feelsLike.toFixed(2)}°C</li>
                    <button onClick={changeUnits}>Celsius a Farenheit</button>
                </ul>
                <ul>
                    <li>Viento: {wind}km/h</li>
                    <li>Humedad: {humidity}%</li>
                </ul>
            </main>
        </div>
    );
};

export default Celsius;