import UseEffectPilotsFilms from '../hooks/UseEffectPilotsFilms';
import {StyledUl, StyleDiv, StyledLi} from '../styleComponents/styleCart';

const FilmsCart = ({filmStarship}) => {
    const infoFilms= [];
    let urlFilmActual ="";
  

    if (filmStarship !== undefined) {
        for(let i= 0; i<filmStarship.length; i++ ) {
          urlFilmActual = filmStarship[i];
            infoFilms.push(UseEffectPilotsFilms(urlFilmActual));
        }
    }
    console.log("Films: ", infoFilms);
      
  return (
    <StyleDiv>
        <p><b>FILMS:</b></p>
        <div>
          <StyledUl>{infoFilms.map(film => {
            return (
              <StyledLi key={film.id}>{film.title}</StyledLi>
            )
          })}
          </StyledUl>
        </div>
    </StyleDiv>
  )
}

export default FilmsCart