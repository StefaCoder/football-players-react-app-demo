import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <header>
            <div className="linksContainer">
                <Link to='/'>
                    <h1 className="navbarTitle">Football Players Demo</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar