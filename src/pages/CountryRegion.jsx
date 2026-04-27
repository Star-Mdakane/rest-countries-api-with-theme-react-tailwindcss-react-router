import { Link, useLoaderData, useParams } from "react-router"
import CountryCard from "../components/CountryCard";

const CountryRegion = () => {

    const region = useLoaderData();
    const { regionName } = useParams();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-66.25 md:w-150 lg:w-318 gap-10 md:gap-18">
            {region.map(country => (
                <Link
                    key={country.alpha3Code}
                    to={`/country/${country.alpha3Code}`}
                    state={{ country }}
                >
                    <CountryCard country={country} />
                </Link>
            ))}
        </div>
    )
}

export default CountryRegion;

export const regionLoader = async ({ params }) => {
    const res = await fetch(`/data.json`)

    if (!res.ok) throw new Error("Could not load region");

    const countries = await res.json();

    const countriesByRegion = countries.filter(
        country => country.region.toLowerCase() === params.regionName.toLowerCase()
    )

    return countriesByRegion;
}