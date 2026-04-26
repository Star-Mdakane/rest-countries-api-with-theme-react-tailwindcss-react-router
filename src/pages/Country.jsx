import { useNavigate, useParams } from "react-router"

const Country = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    return (
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

            <p>{code}</p>
        </div>
    )
}

export default Country