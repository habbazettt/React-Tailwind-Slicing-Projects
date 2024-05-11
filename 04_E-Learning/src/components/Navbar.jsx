import { BsChatFill } from "react-icons/bs"
import { FaBookOpen, FaUser } from "react-icons/fa"
import { GoHomeFill } from "react-icons/go"
import { Link } from "react-router-dom"

const Navbar = () => {
    const pathname = window.location.pathname
    return (
        <div className="w-screen h-16 bg-primary1 fixed bottom-0 flex justify-between items-center px-7" >
            {
                pathname === "/home" ?
                    <div className="text-primary1 bg-secondary1 px-2 py-1 rounded-md">
                        <GoHomeFill size={26} />
                    </div> :
                    <Link to="/home" className="text-secondary1 px-2 py-1 rounded-md">
                        <GoHomeFill size={26} />
                    </Link>
            }
            {
                pathname === "/course" ?
                    <div className="text-primary1 bg-secondary1 px-2 py-1 rounded-md">
                        <FaBookOpen size={26} />
                    </div> :
                    <Link to="/course" className="text-secondary1 px-2 py-1 rounded-md">
                        <FaBookOpen size={26} />
                    </Link>
            }
            {
                pathname === "/chat" ?
                    <div className="text-primary1 bg-secondary1 px-2 py-1 rounded-md">
                        <BsChatFill size={26} />
                    </div> :
                    <Link to="/chat" className="text-secondary1 px-2 py-1 rounded-md">
                        <BsChatFill size={26} />
                    </Link>
            }
            {
                pathname === "/profile" ?
                    <div className="text-primary1 bg-secondary1 px-2 py-1 rounded-md">
                        <FaUser size={26} />
                    </div> :
                    <Link to="/profile" className="text-secondary1 px-2 py-1 rounded-md">
                        <FaUser size={26} />
                    </Link>
            }
        </div >
    )
}

export default Navbar