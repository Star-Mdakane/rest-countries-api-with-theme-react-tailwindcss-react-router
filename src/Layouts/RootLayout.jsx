import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <div className='w-screen h-screen text-gray-text dark:text-white dark:bg-blue-bg'>
            <Outlet />
        </div>
    )
}

export default RootLayout