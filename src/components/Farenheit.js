import React from 'react';
import useFetch from '../hooks/useFetch';
import Date from '../helpers/Date';
import getCurrentDate from '../helpers/Date';
import frio from '../images/tempmin.png';
import calor from '../images/tempmax.png';

const Farenheit = ( { units, setUnits } ) => {
    const { data, temp, tempMin, tempMax, actualDate, description, feelsLike, wind, humidity } =useFetch();

    return (
        <div className='card'>
            <div className='location'>
                <ul className='location-info'>
                    <li className='city'>{data?.name}, {data?.sys.country}</li>
                    <li className='date'>{actualDate}</li>
                </ul>
                <ul className='temp-range'>
                    <li className='icon'><img src={frio} alt='' /></li>
                    <li className='min'>{(tempMin * 1.8 + 32).toFixed(2)}°F <span>Temp. min</span></li>
                    <li className='max'>{(tempMax * 1.8 + 32).toFixed(2)}°F <span>Temp. max</span></li>
                    <li className='icon'><img src={calor} alt='' /></li>
                </ul> 
            </div>

            <main className='description'>
                <ul>
                    <li><img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" /></li>
                    <li>{description}</li>
                </ul>
                <ul>
                    <li className='temp'>{(temp * 1.8 + 32).toFixed(2)}°F</li>
                    <li>Sensación térmica {(feelsLike * 1.8 + 32).toFixed(2)}°F</li>
                    <button onClick={() => setUnits(!units)}>Farenheit a Celsius</button>
                </ul>
                <ul>
                    <li>Viento: {wind}km/h</li>
                    <li>Humedad: {humidity}%</li>
                </ul>
            </main>
        </div>
    );
};

export default Farenheit;