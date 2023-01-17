import LogoStarWars from '../img/sw_logo_stacked_2x-52b4f6d33087_7ef430af.webp'
import { LogoSW, LogIn, DivLogIn} from '../styleComponents/styleApp.jsx'
import { Link } from "react-router-dom";

const Head = () => {
    return (
        <>
        <LogoSW src={LogoStarWars} alt='StarWars'></LogoSW>
        <DivLogIn>
          <Link to="/LogInUser"><LogIn>LOG IN</LogIn></Link>
          ||
          <Link to="/SignUp"><LogIn>SIGN UP</LogIn></Link>
        </DivLogIn>
      </>
    );
  }
  
  export default Head;