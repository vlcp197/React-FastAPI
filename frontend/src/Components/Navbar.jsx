import {Link } from "react-router-dom";

function Navbar() {
    return (
            <div id="NavbarDiv" className="container ">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a xlinkHref="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                        <span className="fs-4">Padilha Perfumes</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/" className="nav-link" >Home</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link" >Contact</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link" >About</Link> </li>
                    </ul>
                </header>
            </div>);
}

export default Navbar;