import UseEffectPilots from '../hooks/UseEffectPilots';


const PilotsCart = ({pilotsStarship}) => {
    debugger;
    console.log(pilotsStarship);
    const infoPilots= [];
    let urlPilotActual ="";

    if (pilotsStarship !== undefined) {
        for(let i= 0; i<pilotsStarship.length; i++ ) {
            urlPilotActual = pilotsStarship[i];
            console.log(urlPilotActual)
            infoPilots.push(UseEffectPilots(urlPilotActual));
            console.log("Info Pilot: ", infoPilots);
        }
    }

      

  return (
    <div>
        <p><b>PILOTS:</b></p>
        <div>
        </div>
    </div>
  )
}

export default PilotsCart