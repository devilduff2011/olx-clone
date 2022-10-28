import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound/index'; 
import SignIn from './pages/SignIn'

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/signin" element={<SignIn />}/>

            /Rota 404, sempre deixar por último
            <Route path='*' element={<NotFound/>} />
        </Routes>

    );
}