import React, {useEffect, useState} from "react";
import {Card  } from "../component/card.jsx";
import { useFetcher } from "react-router-dom";






 export const Home = () => {

    const [personajes, setPersonajes] = useState([]);
    const [planetas, setPlanetas] = useState([]);
    const [ vehiculos, setVehiculos]=useState([])
//Obtener Personajes
    function ObtenerInfoPersonajes() {


        fetch ("https://www.swapi.tech/api/people")
        .then((response)=>response.json())
				.then(data => setPersonajes(data.results))

    }
       
        useEffect(() => {
            ObtenerInfoPersonajes()
            
        }, [])
        console.log(personajes);
//Obtener Planetas
        function ObtenerInfoPlanetas() {

            fetch ("https://www.swapi.tech/api/planets")
            .then((response)=>response.json())
				.then(data => setPlanetas(data.results))

        }


        useEffect(() => {
            ObtenerInfoPlanetas()
            
        }, [])
        console.log(planetas);



//Obtener Vehiculos
        function ObtenerInfoVehiculos() {


            fetch ("https://www.swapi.tech/api/vehicles")
            .then((response)=>response.json())
                    .then(data => setVehiculos(data.results))
    
        }
           
            useEffect(() => {
                ObtenerInfoVehiculos()
                
            }, [])
            console.log(vehiculos);




    return (
        <div>

            {personajes.map ((item)=><Card key={item.uid} name = {item.name}/>)}
            {planetas.map ((item)=><Card key={item.uid} name = {item.name}/>)}
            {vehiculos.map ((item)=><Card key={item.uid} name = {item.name}/>)}
            
        </div>
    )
}



