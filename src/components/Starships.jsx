import React, { useState, useEffect } from 'react';
import { fetchStarships } from '../hooks/FetchStarships'
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import {StyleUl, ListaNaves, NombreNave, ModeloNave} from '../styleComponents/styleStarships'

function Starships() {
  const [starships, setStarships] = useState([]);
  const [starshipAct, setStarshipAct] = useState("Hola");
  const [isOpenModal, openModal, closeModal] = useModal(false);

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

  console.log(starships);

  return (
    <div>
      <StyleUl>
        {starships.map(starship => {
          return (
            <>
              <ListaNaves key={starship.name} onClick={openModal} onChange>
                <NombreNave>{starship.name}</NombreNave>
                <ModeloNave>{starship.model}</ModeloNave>
              </ListaNaves>
            </>
          )
        })}
        <Modal isOpen={isOpenModal} closeModal={closeModal} nave={starshipAct}>
        </Modal>
      </StyleUl>
      
    </div>
  );
}

export default Starships;
