import Starships from './components/Starships'
import Head from './components/Head';
import NavStarWars from './components/NavStarWars';
import {Body} from './styleComponents/styleApp.jsx'


function App() {
  return (
    <Body>
      <Head />
      <NavStarWars />
      <Starships />
    </Body>
  );
}

export default App;
