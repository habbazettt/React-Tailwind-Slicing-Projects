import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"

const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }
    return (
        <div className="w-screen h-screen p-5">
            <Link to={"/option"}><img src="/icons/arrow-left-line.svg" alt="" width={28} className="mt-3" /></Link>
            <h1 className="text-3xl text-center font-extrabold text-darkPrimary mt-12">RESET PASSWORD</h1>
            <p className="text-center text-secondary3 text-[16px] mt-3">Reset your password to regain access to your learning journey</p>

            <div>
                <form action="">
                    <div className="flex flex-col gap-2 mt-7 relative">
                        <label htmlFor="password" className="font-medium text-[17px] text-darkPrimary">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="border border-darkPrimary rounded-md px-3 py-2 relative placeholder:text-[16px]" />
                        <img src="/icons/eye-hide.svg" alt="" width={20} className="absolute right-3 bottom-3" onClick={handleShowPassword} />
                    </div>
                    <div className="flex flex-col gap-2 mt-4 relative">
                        <label htmlFor="confirmPassword" className="font-medium text-[17px] text-darkPrimary">Confirm Password</label>
                        <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="Enter your password" className="border border-darkPrimary rounded-md px-3 py-2 relative placeholder:text-[16px]" />
                        <img src="/icons/eye-hide.svg" alt="" width={20} className="absolute right-3 bottom-3" onClick={handleShowConfirmPassword} />
                    </div>

                    <div className="flex justify-center items-center mt-12">
                        <Button text="Save" to="/option" className={"bg-primary1 text-white font-semibold w-[330px] h-11 rounded-md"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword