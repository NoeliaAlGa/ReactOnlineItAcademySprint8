import React, { useState, useEffect } from 'react';
import { fetchStarships } from '../../hooks/FetchStarships'
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal';
import NavStarWars from '../navigation/NavStarWars';
import {StyleUl, ListaNaves, NombreNave, ModeloNave, BotonPages} from '../../styleComponents/styleStarships'

function Starships() {
  const [urlActualPage, setUrlActualPage] = useState('https://swapi.dev/api/starships/?page=1')
  const [pageResponse, setpageResponse] = useState([]);
  const [starships, setStarships] = useState([]);
  const [isOpenModal, openModal, closeModal, starshipAct] = useModal(false);

  // promises
  useEffect(() => {
    fetchStarships(urlActualPage)
      .then(response => {
        setpageResponse(response);
        setStarships(response.results);
      })
  }, [urlActualPage]);

  return (
    <div>
      <NavStarWars />
      <StyleUl>
        {starships.map(starship => {
          return (
            <>
              <ListaNaves key={starship.name} onClick={() => openModal(starship)}>
                <NombreNave>{starship.name}</NombreNave>
                <ModeloNave>{starship.model}</ModeloNave>
              </ListaNaves>
            </>
          )
        })}
        <Modal isOpen={isOpenModal} closeModal={closeModal} nave={starshipAct}>
        </Modal>
      </StyleUl>
      <div>
        <BotonPages onClick={() => setUrlActualPage(pageResponse.previous)}>Previous page </BotonPages>
        <BotonPages onClick={() => setUrlActualPage(pageResponse.next)}>Next page</BotonPages>
      </div>
    </div>
  );
}

export default Starships;
