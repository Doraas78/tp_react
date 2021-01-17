import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Nav() {
    const style = {
        marginBottom: '30px'
    }

    return (
        <nav style={style} className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">TP React</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to="/">
                        <li className="nav-item">
                            <span className="nav-link">Home</span>
                        </li>
                    </Link>
                    <Link to="/swapi">
                        <li className="nav-item">
                            <span className="nav-link">Swapi</span>
                        </li>
                    </Link>
                    <Link to="/meals">
                        <li className="nav-item">
                            <span className="nav-link">MealsDB</span>
                        </li>
                    </Link>

                </ul>
            </div>
        </nav>
    );

}

export default Nav;