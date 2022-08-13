import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function RandomBeer() {
  // 1. SE CREA EL ESTADO PARA ALMACENAR LA INFO
  const [randomBeer, setRandomBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  // 2. useEffect PARA PEDIRLE INFO A LA API
  useEffect(() => {
    getRandomBeer();
  }, []);

  // 3. FUNCION AXIOS/ FETCH PARA TRAER INFO DE UNA API (URL) se crea una funcion async
  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  // 4. MANEJO DE SECCION DE ...LOADING
  if (isFetching === true) {
    return <h3>...Loading... </h3>;
  }

  return (
    <div>
      <div>
        <img src={randomBeer.image_url} alt="beer" />
        <div>
          <h4>{randomBeer.name}</h4>
          <h5>{randomBeer.tagline}</h5>
        </div>
        <div>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
        </div>
        <p>{randomBeer.description}</p>
        <p>
          <b>Created by:</b> {randomBeer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default RandomBeer;
