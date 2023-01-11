import LogoStarWars from '../img/sw_logo_stacked_2x-52b4f6d33087_7ef430af.webp'
import { LogoSW, LogIn, DivLogIn} from '../styleComponents/styleApp.jsx'

const Head = () => {
    return (
        <>
        <LogoSW src={LogoStarWars} alt='StarWars'></LogoSW>
        <DivLogIn>
          <LogIn>LOG IN</LogIn>
          ||
          <LogIn>SIGN UP</LogIn>
        </DivLogIn>
      </>
    );
  }
  
  export default Head;