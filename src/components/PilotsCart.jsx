import UseEffectPilots from '../hooks/UseEffectPilotsFilms';
import {BotonCart, StyledUl, StyleDiv} from '../styleComponents/styleCart'

const PilotsCart = ({pilotsStarship}) => {
    const infoPilots= [];
    let urlPilotActual ="";
  

    if (pilotsStarship !== undefined) {
        for(let i= 0; i<pilotsStarship.length; i++ ) {
            urlPilotActual = pilotsStarship[i];
            infoPilots.push(UseEffectPilots(urlPilotActual));
        }
    }
    
  return (
    <StyleDiv>
        <p><b>PILOTS:</b></p>
        <div>
          <StyledUl>{infoPilots.map(pilot => {
            return (
              <li key={pilot.name}><BotonCart onClick={() => alert(`Pilot: ${pilot.name} \n Birth year: ${pilot.birth_year} \n Gender: ${pilot.gender} \n Height: ${pilot.height} \n Skin Color: ${pilot.skin_color} \n Eye Color: ${pilot.eye_color}`)
              } >{pilot.name}</BotonCart>
              </li>
            )
          })}
          </StyledUl>
        </div>
    </StyleDiv>
  )
}

export default PilotsCart