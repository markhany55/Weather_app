import React, { useEffect, useState } from "react";
import {  useFormik } from "formik";
const WeatherApp =()=>{
    const api_key="373d80a947d6a9e014d4c204527b3348"
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
console.log(data)
}
})
const show =weather.map((ele,id)=>{
    return(
        <div key={id}>
<p>city: {ele.city}</p>
<p>country: {ele.country}</p>
<p>tempreature: {ele.tempreature}</p>
<p>humidity: {ele.humidity}</p>
<p>conditions: {ele.description}</p>
        </div>
    )
})    

return(
    <div>
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