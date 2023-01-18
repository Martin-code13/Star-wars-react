import React, {useEffect, useState} from "react";
import {Card  } from "../component/card.jsx";
import { useFetcher } from "react-router-dom";






 export const Home = () => {

    const [personajes, setPersonajes] = useState([]);
    const [planetas, setPlanetas] = useState([]);

    function ObtenerInfoPersonajes() {


        fetch ("https://www.swapi.tech/api/people")
        .then((response)=>response.json())
				.then(data => setPersonajes(data.results))

    }
       

        useEffect(() => {
            ObtenerInfoPersonajes()
            
        }, [])
        console.log(personajes);

    

    return (
        <div>

            

            {personajes.map ((item)=><Card key={item.uid} name = {item.name}/>)}
            
        </div>
    )
}



