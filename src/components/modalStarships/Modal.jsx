import '../modalStarships/style/modal.css'
import React from 'react';
import PilotsCart from '../Carts/PilotsCart';
import FilmsCart from '../Carts/FilmsCart';
import UseEffectModal from '../modalStarships/hook/UseEffectModal';

const Modal = ({isOpen, closeModal, nave}) => {
  const imgStarshipAct = UseEffectModal(nave);
  console.log(nave);
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container">
            <button className="modal-close buttonCloseModal" onClick={closeModal}>X</button>
            <h1>{nave.name}</h1>
            <img className="imgStarshipPopUp" src={imgStarshipAct}  alt={nave.name}></img>
            <div className='divTextPrincipal'>
              <p><b>MODEL:</b> {nave.model}</p>
              <p><b>STARSHIP CLASS:</b> {nave.starship_class}</p>
              <p><b>MANUFACTURER:</b> {nave.manufacturer}</p>
              <p><b>COST:</b> {nave.cost_in_credits}</p>
            </div>
            <div className='divText'>
              <div className='textPopUp'>
                <p><b>CREW:</b> {nave.crew}</p>
                <p><b>PASSENGER CAPACITY:</b> {nave.passengers}</p>
                <p><b>CARGO CAPACITY:</b> {nave.cargo_capacity}</p>
                <p><b>CONSUMABLES:</b> {nave.consumables}</p>
              </div>
              <div className='textPopUp'>
                <p><b>LENGTH:</b> {nave.length}</p>
                <p><b>MAXIMUM ATMOSPHERING SPEED:</b> {nave.max_atmosphering_speed}</p>
                <p><b>HYPERDRIVE RATING:</b> {nave.hyperdrive_rating}</p>
                <p><b>MAXIMUM SPEED IN REALSPACE:</b> {nave.max_atmosphering_speed}</p>
              </div>
            </div>
            <div className='divText'>
              <PilotsCart pilotsStarship={nave.pilots}/>
              <FilmsCart filmStarship={nave.films}/>
            </div>
        </div>
    </article>
  )
}

export default Modal