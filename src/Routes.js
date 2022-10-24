import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />}/>
            <Route path='*' element={<NotFound/>} />
        </Routes>

    );
}