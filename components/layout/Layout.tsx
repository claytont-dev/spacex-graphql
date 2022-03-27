import { ReactNode } from "react"
import Navbar from "./Navbar"


type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => (

    <div className="min-h-screen overflow-hidden bg-primary">
        <Navbar />
        {children}
    </div>
) 

export default Layout