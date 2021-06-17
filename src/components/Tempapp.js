import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp=() =>{
    const [city,setCity] =useState(null);
    const [search,setSearch]= useState("surat");

    useEffect(()=>{
         const fetchApi = async ()=>{
             const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dd95049c0974b401476d082af7659576`;
             const response= await fetch(url);
            
             const resjson = await response.json();
             console.log(resjson);
           setCity(resjson.main);
         };
        fetchApi();
    },[search])
    return(
        <>
            <div className="box">
                <div className="input">
                    <input placeholder="enter area" type='search' className="inputfield" onChange={(event)=>{ setSearch(event.target.value)

                    }}/>
                </div>
            
            {! city ? (<h7>
            no data 
               
            </h7>  ) : ( <div className="info">
                    <h2> 
                    Temperature: 
                    {city.temp}

                    </h2>
                     <h3>
                     Name of city: 
                 {search} 
                     </h3>
                     <h3>
                         max temp : {city.temp_max} min temp : {city.temp_min}
                     </h3>   
            </div>

            )

            }
           
            </div>
        </>
    )

}

export default Tempapp;