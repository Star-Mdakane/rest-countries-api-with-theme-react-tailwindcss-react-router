import { useLocation, useNavigate } from "react-router"

const DropdownNav = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="relative w-50">
            <select name="" id="" className="w-50 px-6 h-12 pr-12 rounded-[5px] text-[12px] leading-[135%] tracking-normal font-normal bg-white text-text dark:bg-secondary dark:text-white appearance-none cursor-pointer shadow-[0_2px_9px_0_rgb(0_0_0/5.32%)]"
                value={location.pathname}
                onChange={(e) => e.target.value && navigate(`/region/${e.target.value}`)}
            >
                <option value="/home">All Countries</option>
                <option value="/africa">Africa</option>
                <option value="/america">America</option>
                <option value="/asia">Asia</option>
                <option value="/europe">Europe</option>
                <option value="/oceania">Oceania</option>

            </select>

            <svg
                className="absolute right-6 top-1/2 -translate-y-1/2 w-3 h-2 pointer-events-none"
                viewBox="0 0 10 6"
                fill="none"
            >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" />
            </svg>
        </div>
    )
}

export default DropdownNav