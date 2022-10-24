import {Link} from 'react-router-dom';
import Template from '../components/Template'
const Home =(props) => {
    return (
        <Template>
            <h1>Página inicial</h1>
            <br />
            <Link to='/sobre'>Ir para a pagina sobre</Link>
        </Template>
    )
}

export default Home;

