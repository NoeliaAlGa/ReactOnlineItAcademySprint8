import { Link } from "react-router-dom";
import {ImgWallpaper, DivImgButton, TextEncimaImg} from '../../styleComponents/styleHome';
import ImgGuide from '../../img/fondo home.jpg';

const Home = () => 
<div>
    <DivImgButton>
        <ImgWallpaper src={ImgGuide} alt="Guia Starships Star Wars"></ImgWallpaper>
        <Link to="/Starships"><TextEncimaImg>Starships Guide</TextEncimaImg></Link>
    </DivImgButton>
</div>
export default Home;
