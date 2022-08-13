import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function NewBeer() {

  const navigate = useNavigate()

  const[newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  })

  const handleChange = (event) => {
    const stateClone = {...newBeer}
    stateClone[event.target.name] = event.target.value 
    setNewBeer(stateClone)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      navigate("/beers")
    } catch (error) {
      navigate("error")
    }
  }


  return (
    <div onSubmit={handleSubmit}>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" name='name' onChange={handleChange} value={newBeer.name} />
          <br />
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name='tagline' onChange={handleChange} value={newBeer.tagline} />
          <br />
          <label htmlFor="description">Description</label>
          <input type="text" name='description' onChange={handleChange} value={newBeer.description} />
          <br />
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name='first_brewed' onChange={handleChange} value={newBeer.first_brewed} />
          <br />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input type="text" name='brewers_tips' onChange={handleChange} value={newBeer.brewers_tips} />
          <br />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="text" name='attenuation_level' onChange={handleChange} value={newBeer.attenuation_level} />
          <br />
          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" name='contributed_by' onChange={handleChange} value={newBeer.contributed_by} />
          <br />
          <button>ADD NEW</button>
        </form>
    </div>
  )
}

export default NewBeer