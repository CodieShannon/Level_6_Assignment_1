//Import StyleSheet
import './css/App.css';

//Import Link From React Router
import { Link } from "react-router-dom";

//Functions
function Nav()
{
    return(
        <nav>
            <picture id="nav-logo">
                <source src="./images/logo.png" type="image/webp"/>
                <img src="./images/logo.png" alt="Company Logo"/>
            </picture>
            <Link className='nav-item' to="/">SCP-002</Link>
            <Link className='nav-item' to="/SCP-003">SCP-003</Link>
            <Link className='nav-item' to="/SCP-004">SCP-004</Link>
            <br id="navbreak"/>
            <Link className='nav-item' to="/SCP-005">SCP-005</Link>
            <Link className='nav-item' to="/SCP-006">SCP-006</Link>
        </nav>
    );
}

//Export
export default Nav;