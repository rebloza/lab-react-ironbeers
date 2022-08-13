import React from 'react'

import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function BeerDetails() {

    const {beerId} = useParams()
    // 1. SE CREA EL ESTADO PARA ALMACENAR LA INFO
    const [beerDetails, setBeerDetails] = useState(null)

    const [isFetching, setIsFetching] = useState(true)

    // 2. useEffect PARA PEDIRLE INFO A LA API
    useEffect(() => {
        getBeerDetails()
      },[])
    
    // 3. FUNCION AXIOS/ FETCH PARA TRAER INFO DE UNA API (URL) se crea una funcion async 
    const getBeerDetails = async () => {

        try{
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          
          setBeerDetails(response.data)
          setIsFetching(false)
        }catch(error){
          console.log(error)
        }
    
           
      }
    
     // 4. MANEJO DE SECCION DE ...LOADING
      if(isFetching === true){
        return <h3>...Loading... </h3>
      }

      return (
        <div>
            <div>
                <img  src={beerDetails.image_url} alt="beer"/>
                 <div> 
                    <h4>{beerDetails.name}</h4>
                    <h5>{beerDetails.tagline}</h5>
                </div> 
                <div>
                    <p>{beerDetails.first_brewed}</p> 
                    <p>{beerDetails.attenuation_level}</p>
                     
                </div>
               <p>{beerDetails.description}</p>
               <p><b>Created by:</b> {beerDetails.contributed_by}</p>
            </div>
        </div>
      )
}

export default BeerDetails