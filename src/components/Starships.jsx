import React, { useState, useEffect } from 'react';
import { fetchStarships } from '../hooks/FetchStarships'
import {StyleUl, ListaNaves, NombreNave, ModeloNave} from '../styleComponents/styleStarships'

function Starships() {
  const [starships, setStarships] = useState([]);

  // promises
  useEffect(() => {
    fetchStarships()
      .then(response => {
        setStarships(response.results);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <StyleUl>
        {starships.map(starship => (
          <ListaNaves key={starship.name}>
            <NombreNave>{starship.name}</NombreNave>
            <ModeloNave>{starship.model}</ModeloNave>
          </ListaNaves>
        ))}
      </StyleUl>
    </div>
  );
}

export default Starships;
