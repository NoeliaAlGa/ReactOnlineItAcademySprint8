import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Starships from './pages/Starships'
import LogInUser from './pages/LogInUser';
import SignUp from './pages/SignUp';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/LogInUser" element={<LogInUser />}/>
            <Route path="/SignUp" element={<SignUp />}/>
            <Route path="/Starships/" element={<Starships />}/>
        </Routes>
    </BrowserRouter>
);
export default Router;