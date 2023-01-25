import {useState} from "react";

export const useModal = (inicialValue = false) => {
    const [isOpen, setIsOpen] = useState(inicialValue);
    const [starshipAct, setStarshipAct] = useState("");


    const openModal = (starship) => {
      setIsOpen(true);
      setStarshipAct(starship);
    };
    const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal, starshipAct];
}

