import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const RootLayout = () => {
    return (
        <div className='w-screen min-w-93.75 min-h-screen text-text bg-[#FCFCFC] dark:text-white dark:bg-bg'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout