import { Link } from "react-router"

const NotFound = () => {
    return (
        <div className="flex items-center justify-center">
            <h2>Page Not Found</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound