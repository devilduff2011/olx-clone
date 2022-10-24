import {Link} from 'react-router-dom';

const Home =(props) => {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/sobre">Sobre</Link>

        </div>
    )
}

export default Home;

