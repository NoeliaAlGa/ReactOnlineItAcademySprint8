import  {useEffect} from 'react'
import { fetchPilots } from '../hooks/FetchPilots';

function UseEffectPilots(urlPilotActual) {
    debugger;
    const infoPilots= [];
    
    useEffect(() => {
        fetchPilots(urlPilotActual)
          .then(response => {
            console.log(response);
            infoPilots.push(response);
          })
      });
    return(infoPilots);
}

export default UseEffectPilots