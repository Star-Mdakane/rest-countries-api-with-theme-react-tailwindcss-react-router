import { Link, useRouteError } from "react-router"

const CountriesError = () => {

    const error = useRouteError();

    return (
        <div className="flex items-center justify-center">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default CountriesError