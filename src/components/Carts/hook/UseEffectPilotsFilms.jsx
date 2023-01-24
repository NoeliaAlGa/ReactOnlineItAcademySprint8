import  {useEffect, useState} from 'react'
import { fetchCarts } from './FetchCarts';

function UseEffectPilotsFilms(urlActual) {
    
    const [info, setInfo]= useState([]);
    
    useEffect(() => {
      fetchCarts(urlActual)
          .then(response => {
            setInfo(response);
          })
      });
    return(info);
}

export default UseEffectPilotsFilms