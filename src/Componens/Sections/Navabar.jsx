import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="d-flex justify-content-evenly mb-4">
            <Link className="btn btn-success" to="/path1">CounteCard</Link>
            <Link className="btn btn-primary" to="/path2">TodoCard</Link>
        </div>
    )
}

export default Navbar;
