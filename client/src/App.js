import React, { useEffect } from 'react';
import MapComponent from "./Map1";
import './App.css';




const App =() => {
    const getData = async() =>{
        try {
           const response =  await fetch(`http://localhost:8000/beytepe_roads_rev2`)
           const json = response.json()
           console.log(json)
        } catch (err) {
            console.error(err)          
        }
    }

    useEffect(() => getData, [])
    
    return (
        <MapComponent />
    );
}



export default App;