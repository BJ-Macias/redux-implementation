
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link to={'/'} className="text-light">
                        CRUD, REDUX REST API AXIOS
                    </Link>
                </h1>
            </div>

            <Link to={'/productos/nuevo'}
                className="btn btn-danger nuevo-post d-block d-md-in"
            >
                Agregar producto +
            </Link>
        </nav>
    )
}

export default Header
