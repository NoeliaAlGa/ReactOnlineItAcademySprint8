
import LogoStarWars from '../img/sw_logo_stacked_2x-52b4f6d33087_7ef430af.webp'
import { LogoSW, LogIn, DivLogIn, TextRegUser} from '../styleComponents/styleApp.jsx'
import { Link } from "react-router-dom";

const Head = () => {
  const actualLogIn = JSON.parse(window.localStorage.getItem("LogedUser"));
  let user;
  if(actualLogIn !==null) {
    user = `👽 User: ${actualLogIn[0].nombre}`;
  }
  
    return (
        <>
        <LogoSW src={LogoStarWars} alt='StarWars'></LogoSW>
        <DivLogIn>
          <Link to="/LogInUser"><LogIn>LOG IN</LogIn></Link>
          ||
          <Link to="/SignUp"><LogIn>SIGN UP</LogIn></Link>
        </DivLogIn>
        <TextRegUser>{user}</TextRegUser>
      </>
    );
  }
  
  export default Head;