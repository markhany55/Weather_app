import React, { useEffect, useState } from "react";
import {  useFormik } from "formik";
import './WeatherApp.scss'
const WeatherApp =()=>{
const [weather,setweather]=useState([
])

const formik = useFormik({
    initialValues:{
        city:'',
        country:''
    },
onSubmit:async (values)=>{
const link= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${formik.values.city}%2C${formik.values.country}&appid=373d80a947d6a9e014d4c204527b3348`)
const data=await link.json('')
setweather([...weather,{city:data.name,country:data.sys.country,tempreature:data.main.temp,humidity:data.main.humidity,description:data.weather[0].description}])
}
})
const show =weather.map((ele,id)=>{
    return(
        <div className="result" key={id}>
<p>City: {ele.city}</p>
<p>Country: {ele.country}</p>
<p>Tempreature: {ele.tempreature}</p>
<p>Humidity: {ele.humidity}</p>
<p>Conditions: {ele.description}</p>
        </div>
    )
})    
return(
    <div className="contain">
            <form onSubmit={formik.handleSubmit}>
                <input type="text" id="city" placeholder="City" onChange={formik.handleChange} />
                <input type="text" id="country" placeholder="Country" onChange={formik.handleChange} />
                <button type="submit">Get weather</button>
            </form>
        {show}
        </div>
    )
}
export default WeatherApp