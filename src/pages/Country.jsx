import { useLoaderData, useLocation, useNavigate } from "react-router"

const Country = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const loaderCountry = useLoaderData();

    const country = location.state?.country || loaderCountry;

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
            <div className="flex flex-col mx-auto h-auto lg:flex-row gap-12 md:gap-gap-14 lg:gap-auto lg:justify-between mt-16 md:mt-14 lg:mt:80 w-[320px] md:w-142.5 lg:max-w-319.5">
                {country.alpha3Code}
            </div>
        </>
    )
}

export default Country;

export const countryLoader = async ({ params }) => {
    const res = await fetch(`/data.json`)


    const country = await res.json();

    const specCountry = country.find(
        c => c.alpha3Code.toLowerCase() === params.code.toLowerCase()
    )

    if (!specCountry.ok) throw new Error(`Country ${params.code} not found`);


    return specCountry;
}