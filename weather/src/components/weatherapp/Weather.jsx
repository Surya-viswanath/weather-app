import React from 'react'
import './Weather.css'
import {  } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

import clear_icon from '../assets/clear_icon.png'
import cloud_icon from '../assets/cloud_icon.png'
import drizzle_icon from '../assets/drizzle_icon.png'
import rain_icon from '../assets/rain_icon.png'
import snow_icon from '../assets/snow_icon.png'
import search_icon from '../assets/search_icon.png'
import wind_icon from '../assets/wind_icon.png'
import humidity_icon from '../assets/humidity_icon.png'
function Weather() {
 
let api_key ="dd94f859a0e52d6e4767fddf735f04a7";

const [wicon, setwicon] = useState(cloud_icon);
  const search = async ()=>{
    const element = document.getElementsByClassName("cityinput");
    if(element[0].value==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=matric&appid=${api_key}`;
    
    let response= await fetch(url);
    let data = await response.json();
    const humidity =document.getElementsByClassName("humidity-percent");
    const wind =document.getElementsByClassName("wind-rate");
    const temprature =document.getElementsByClassName("weather-temp");
    const location =document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setwicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setwicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setwicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setwicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setwicon(snow_icon);
    }
    else{
      setwicon(clear_icon);
    }
  }
  return (
    <div className='con'>
    <div className='container'>
        <div className='top'>
            <input type="text" className='cityinput' placeholder='search' />
            <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} />
            </div>
        </div>
      <div className="weather-image">
      <img src={cloud_icon}/>
      </div>
      <div className='weather-temp'>24 °C</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
            <img src={humidity_icon} className='icon'/>
            <div className='data'>
                <div className='humidity-percent'>64%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>

        <div className='element'>
            <img src={wind_icon} className='icon'/>
            <div className='data'>
                <div className='wind-rate'>18 km/h</div>
                <div className='text'>Wind Speed</div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Weather 
