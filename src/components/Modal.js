import '../styleComponents/modal.css'

const Modal = ({isOpen, closeModal, nave}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>X</button>
            <h1>{nave.name}</h1>
            <img src= "https://static.wikia.nocookie.net/starwars/images/0/0b/BLOC01AB.jpg/revision/latest/scale-to-width-down/592?cb=20070516205643" alt={nave.name}></img>
            <p><b>MODEL:</b> {nave.model}</p>
            <p><b>STARSHIP CLASS:</b> {nave.starship_class}</p>
            <p><b>MANUFACTURER:</b> {nave.manufacturer}</p>
            <p><b>COST:</b> {nave.cost_in_credits}</p>
            <div>
              <div>
                <p><b>CREW:</b> {nave.crew}</p>
                <p><b>PASSENGER CAPACITY:</b> {nave.passengers}</p>
                <p><b>CARGO CAPACITY:</b> {nave.cargo_capacity}</p>
                <p><b>CONSUMABLES:</b> {nave.consumables}</p>
              </div>
              <div>
                <p><b>LENGTH:</b> {nave.length}</p>
                <p><b>MAXIMUM ATMOSPHERING SPEED:</b> {nave.max_atmosphering_speed}</p>
                <p><b>HYPERDRIVE RATING:</b> {nave.hyperdrive_rating}</p>
                <p><b>MAXIMUM SPEED IN REALSPACE:</b> {nave.max_atmosphering_speed}</p>
              </div>
            </div>
            <div>
              <p><b>PILOTS:</b></p>
              <p><b>FILMS:</b></p>
            </div>
        </div>
    </article>
  )
}

export default Modal