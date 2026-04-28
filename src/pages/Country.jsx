import { Link, useLoaderData, useLocation, useNavigate } from "react-router"

const Country = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const loaderCountry = useLoaderData();

    const country = loaderCountry || location.state?.country;

    if (!country) return null;

    const languages = Array.isArray(country.languages)
        ? country.languages.map(l => l.name)
        : Object.values(country.languages || {});

    const currencyObjs = country.currencies ? Object.values(country.currencies) : [];
    const currencies = currencyObjs.map(c => c.name).join(', ') || 'None';

    const borders = country.borders || [];

    return (
        <>
            <div className="max-w-360 mx-auto px-4 md:px-10 lg:px-20 w-full">
                <div className="flex md:flex-row lg:justify-start my-6 md:my-12">
                    <button onClick={() => navigate(-1)} className="w-34 h-10 gap-2 flex justify-center items-center bg-white text-text dark:bg-secondary dark:text-white shadow-[0_0_7px_0_rgb(0_0_0_/10%)] rounded-xs cursor-pointer">
                        <svg width="23" className="dark:fill-white fill-text" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="call-made">
                                <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M6.93514 3.97748L8.32216 5.3033L3.745 9.67852L21.2214 9.67852L21.2214 11.5347L3.745 11.5347L8.32216 15.9099L6.93514 17.2357L5.55931e-05 10.6066L6.93514 3.97748Z" />
                            </g>
                        </svg>
                        <span className="dark:text-white text-text text-[14px] leading-[225%] tracking-normal font-light">Back</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:px-20  mx-auto h-auto lg:flex-row gap-12 md:gap-14 lg:gap-auto lg:h-100 lg:justify-between mt-16 md:mt-14 lg:mt:20 w-80 md:w-142.5 lg:w-full dark:text-white text-text">
                <div className="lg:w-140">
                    <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="h-full w-full object-cover" />
                </div>
                <div className="lg:w-150 flex flex-col gap-4 md:gap-6 justify-center">
                    <p className="text-[24px] md:text-[32px] leading-[137.5%] tracking-normal font-bold">
                        {country.name}
                    </p>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row gap-8 md:justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Native Name</span>: {country.nativeName}</p>
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Population</span>: {country.population}</p>
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Region</span>: {country.region}</p>
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Sub Region</span>: {country.subregion}</p>
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Capital</span>: {country.capital || "None"}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Top Level Domain</span>: {country.topLevelDomain?.join(', ')}</p>
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Currencies</span>: {currencies}</p>
                                <p className="text-[16px] leading-8 tracking-normal"><span className="font-bold">Languages</span>: {languages.join(', ')}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="text-[16px] leading-8 tracking-normal font-bold mr-4">
                                Border Countries:
                            </p>

                            {borders.length ? (
                                <div className="flex gap-4 flex-wrap">
                                    {borders.map(borderCode => (
                                        <Link
                                            to={`/country/${borderCode.toLowerCase()}`}
                                            key={borderCode}
                                            state={{ country }}
                                            className="flex items-center justify-center h-7 px-2 text-[14px] leading-[225%] tracking-normal shadow-[0_0_4px_1px_rgb(0_0_0/10%)] rounded-xs bg-white dark:bg-secondary"
                                        >
                                            {borderCode}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-[16px] leading-8 tracking-normal font-bold">No borders</p>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Country;

export const countryDetailLoader = async ({ params }) => {
    const res = await fetch(`/data.json`)

    if (!res.ok) throw new Error("Could not fetch countries");

    const countries = await res.json();

    const specCountry = countries.find(
        c => c.alpha3Code.toLowerCase() === params.code.toLowerCase()
    )

    if (!specCountry) throw new Error("Country not found", { status: 404 });


    return specCountry;
}
