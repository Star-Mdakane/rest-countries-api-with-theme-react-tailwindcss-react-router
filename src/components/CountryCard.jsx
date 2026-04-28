const CountryCard = ({ country }) => {
    return (
        <div className="w-66.25 h-84 flex flex-col text-text bg-white dark:text-white dark:bg-secondary">
            <div className="w-full h-40 mb-6">
                <img src={country.flags.svg} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="px-6 flex flex-col gap-4">
                <p className="text-[18px] leading-[145%] tracking-normal font-bold">
                    {country.name}
                </p>
                <div className="flex flex-col gap-2">
                    <p className="text-[14px] leading-4 tracking-normal"><span className="font-bold">Population</span>: {country.population}</p>
                    <p className="text-[14px] leading-4 tracking-normal"><span className="font-bold">Region</span>: {country.region}</p>
                    <p className="text-[14px] leading-4 tracking-normal"><span className="font-bold">Capital</span>: {country.capital}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard