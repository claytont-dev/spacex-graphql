import { useState } from 'react'
import { SiSpacex } from 'react-icons/si'
import { BsSun, BsMoon } from 'react-icons/bs'
import { FaUserAstronaut, FaSearch } from 'react-icons/fa'


const Navbar = () => {

    const [ isDarkMode, setIsDarkMode ] = useState(true)

    return (
        <div className="h-20 flex justify-between items-center w-full px-8 bg-secondary text-white mb-10">
            <SiSpacex size='150' />

            <div className="flex items-center justify-center gap-5 text-xl font-semibold">
                <div>Link</div>
                <div>Link</div>
                <div>Link</div>
                <div>Link</div>
            </div>

            <div className="flex justify-evenly items-center gap-10">
                <FaSearch size='40' />
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    { isDarkMode ? <BsMoon size='40' /> : <BsSun size='40' /> }
                </button>
                <FaUserAstronaut size='40' />
            </div>
        </div>
    )
}

export default Navbar