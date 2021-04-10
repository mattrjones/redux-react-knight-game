import { Link } from 'react-router-dom';

export default function NavBar() {

    return(
        <nav>

            <Link to="/">Welcome</Link>
            <Link to="/knights">Knights List</Link>
            
        </nav>
    )
}