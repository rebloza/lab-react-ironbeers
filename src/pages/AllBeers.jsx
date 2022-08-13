import React from 'react'

import {useState, useEffect} from 'react'

import axios from "axios"

import {Link } from "react-router-dom"



function AllBeers() {
 // 1. SE CREA EL ESTADO PARA ALMACENAR LA INFO
  const [beers, setBeers] = useState([])
  
  const [isFetching, setIsFetching] = useState(true)

// 2. useEffect PARA PEDIRLE INFO A LA API
  useEffect(() =>{
    getBeers()
  })

  // 3. FUNCION AXIOS/ FETCH PARA TRAER INFO DE UNA API (URL) se crea una funcion async 
  const getBeers = async () => {
    try{
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      setBeers(response.data)
      setIsFetching(false)
    }catch(error){
      console.log("/error")
    }
      
  }
 // 4. MANEJO DE SECCION DE ...LOADING
  if(isFetching === true ){
    return <h3>...Loading....</h3>
  }


  return (
    <div>

        {beers.map((eachBeer) =>{
          return (
              <div key={eachBeer._id}>
                <Link to={`/beers/${eachBeer._id}/details`}> 
                <img  src={eachBeer.image_url} alt="beer"/>
                </Link>
                <h4>{eachBeer.name}</h4>
                <h5>{eachBeer.tagline}</h5>
                <p><b>Created by:</b> {eachBeer.contributed_by}</p>
                
              </div>
          )
        })}  
    
    </div>
  )
}

export default AllBeers