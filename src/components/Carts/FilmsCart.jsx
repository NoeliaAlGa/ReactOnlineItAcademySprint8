import UseEffectPilotsFilms from '../Carts/hook/UseEffectPilotsFilms';
import {StyledUl, StyleDiv, BotonCart} from '../Carts/style/styleCart';

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
              <li key={film.id}><BotonCart onClick={() => alert(`Film: ${film.title} \n Summary film: \n ${film.opening_crawl}`)
            } >{film.title}</BotonCart></li>
            )
          })}
          </StyledUl>
        </div>
    </StyleDiv>
  )
}

export default FilmsCart