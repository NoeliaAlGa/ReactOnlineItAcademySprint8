import { Link } from "react-router-dom";
import {ImgWallpaper, DivImgButton, TextEncimaImg} from '../../components/pages/style/styleHome'
import ImgGuide from '../../img/fondo home.jpg';
import Head from '../../components/navigation/Head';

const Home = () => {
    const toLogedUser =
    window.localStorage.getItem("LogedUser") === null
      ? <Link to="/LogInUser"><TextEncimaImg>Starships Guide</TextEncimaImg></Link>
      : <Link to="/Starships"><TextEncimaImg>Starships Guide</TextEncimaImg></Link>

return (<div>
        <Head />
        <DivImgButton>
            <ImgWallpaper src={ImgGuide} alt="Guia Starships Star Wars"></ImgWallpaper>
            <>{toLogedUser}</>
        </DivImgButton>
    </div>)
}
export default Home;
