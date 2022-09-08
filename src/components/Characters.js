import React, { useState, useEffect, useReducer } from 'react'

export default function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async (url) => {
      let response = await fetch(url)
      let data = await response.json()
      setCharacters(data.results)
    }
    
    getCharacters('https://rickandmortyapi.com/api/character/')
  }, [])

  const [favorites, dispatch] = useReducer((state = [], action) => {
    switch(action.type) {
      case 'ADD_TO_FAVORITES': {
        return [...state, action.payload]
      }
      default: {
        return state
      }
    }
  })

  const handleFavorites = (character) => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: character
    })
  }
  
  return (
    <>
      <ul>
        {
          favorites?.map((favorite) => <li>
            <p>{favorite.name}</p>
          </li>)
        }
      </ul>
      <ul>
        {
          characters.map((character) => 
          <li key={character.id}>
            <div>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
              <button onClick={() => handleFavorites(character)}>Add favorites</button>
            </div>
          </li>)
        }
      </ul>
    </>
  )
}
