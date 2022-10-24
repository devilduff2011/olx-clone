import './styles.css'
import {Link} from 'react-router-dom';
import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();
    return(
        <header>
            <div className="container">
                <div className="logo" >
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </div>

                <nav>
                    <ul>
                        {logged &&
                        <>
                            <li>
                                <Link to="/my-account">Minha conta</Link>
                            </li>

                            <li>
                                <Link to="/logout">Sair</Link>
                            </li>

                            <li>
                                <Link to="/post-an-ad" className="button">Anuncie aqui</Link>
                            </li>
                        </>

                        }
                        {!logged &&                        
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>

                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>

                                <li>
                                    <Link to="/signin" className="button">Anuncie aqui</Link>
                                </li>
                            </>                        
                        }
                       


                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;