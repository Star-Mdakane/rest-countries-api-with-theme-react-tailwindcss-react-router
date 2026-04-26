import { Outlet } from "react-router"
import Header from "../components/Header"

const RootLayout = () => {
    return (
        <div className='w-screen h-screen text-text bg-[#FCFCFC] dark:text-white dark:bg-bg'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout