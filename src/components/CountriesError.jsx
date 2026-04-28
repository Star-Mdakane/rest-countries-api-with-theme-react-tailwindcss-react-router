import { Link, useRouteError } from "react-router"

const CountriesError = () => {

    const error = useRouteError();

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center text-text bg-[#FCFCFC] dark:text-white dark:bg-bg">
            <h2 className="text-[14px] lg:text-[24px] dark:text-white leading-5 lg:leading-[137.5%] tracking-normal font-extrabold">Error</h2>
            <p>{error.message}</p>
            <Link to="/">
                <p className="w-34 h-10 gap-2 flex justify-center items-center bg-white text-text dark:bg-secondary dark:text-white shadow-[0_0_7px_0_rgb(0_0_0_/10%)] rounded-xs cursor-pointer mt-20">Home</p>
            </Link>
        </div>
    )
}

export default CountriesError