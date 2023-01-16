import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Starships from './pages/Starships'

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Starships/" element={<Starships />}/>
        </Routes>
    </BrowserRouter>
);