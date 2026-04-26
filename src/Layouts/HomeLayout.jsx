import { Outlet } from "react-router"
import DropdownNav from "../components/DropdownNav"
import SearchInput from "../components/SearchInput"

const HomeLayout = () => {
    return (
        <div className="max-w-360 mx-auto w-full flex flex-col items-center justify-between px-4 md:px-10 lg:px-20 dark:bg-bg dark:text-white">
            <div className="w-full flex flex-col md:flex-row gap-10 md:gap-2 md:justify-between my-6 md:my-12 ">
                <SearchInput />
                <DropdownNav />
            </div>
            <Outlet />
        </div>
    )
}

export default HomeLayout