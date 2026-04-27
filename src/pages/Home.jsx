import { Link, useLoaderData } from "react-router";
import CountryCard from "../components/CountryCard";

const Home = () => {

    const countries = useLoaderData();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-[repeat(auto-fit, 265px)] w-66.25 md:w-150 lg:w-auto lg:max-w-318 gap-10 md:gap-18">
            {countries.map(country => (
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

export default Home;

const countryLoader = async () => {
    const res = await fetch("/data.json")

    if (!res.ok) throw new Error("Could not load countries");

    return res.json();
}

export { countryLoader }