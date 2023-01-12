import '../styleComponents/modal.css'

const Modal = ({isOpen, closeModal, nave}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>X</button>
            <p>{nave}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque iure modi, rem nostrum architecto quibusdam, earum recusandae mollitia doloremque nulla porro, accusamus veritatis cumque sed distinctio voluptatem nemo maiores!
              </p>
        </div>
    </article>
  )
}

export default Modal