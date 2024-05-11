import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import { FaFacebook, FaGithub } from "react-icons/fa"

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="w-screen h-screen p-5">
            <Link to={"/option"}><img src="/icons/arrow-left-line.svg" alt="" width={28} className="mt-3" /></Link>
            <h1 className="text-4xl text-center font-extrabold text-darkPrimary mt-7">SIGN IN</h1>
            <p className="text-center text-secondary3 text-[16px] mt-2">Sign in to access your personalized learning journey</p>

            <div>
                <form action="">
                    <div className="flex flex-col gap-2 mt-6">
                        <label htmlFor="email" className="font-medium text-[17px] text-darkPrimary">Email Here</label>
                        <input type="email" name="email" id="email" placeholder="youremail@gmail.com" className="border border-darkPrimary rounded-md px-3 py-2 placeholder:text-[16px]" />
                    </div>
                    <div className="flex flex-col gap-2 mt-4 relative">
                        <label htmlFor="password" className="font-medium text-[17px] text-darkPrimary">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="border border-darkPrimary rounded-md px-3 py-2 relative placeholder:text-[16px]" />
                        <img src="/icons/eye-hide.svg" alt="" width={20} className="absolute right-3 bottom-3" onClick={handleShowPassword} />
                    </div>
                    <Link to={"/forgotpassword"}>
                        <p className="text-right text-secondary3 text-[15px] mt-2">Forgot Password?</p>
                    </Link>

                    <div className="flex justify-center items-center">
                        <Button text="Sign In" to="/home" className={"bg-primary1 text-white font-semibold w-[330px] h-11 rounded-md mt-6"} />
                    </div>

                    <div className="flex justify-center items-center gap-3 mt-9">
                        <div className="w-14 h-[2px] bg-primary1" />
                        <p className="text-[16px] font-semibold text-darkPrimary">or sign in with</p>
                        <div className="w-14 h-[2px] bg-primary1 rounded-full" />
                    </div>

                    <div className="flex justify-center items-center gap-3 mt-5">
                        <div className="relative flex justify-center items-center">
                            <FaFacebook className="absolute top-1/2 -translate-y-1/2 left-[11px] text-white" />
                            <Button text="Facebook" to="/option" className={"bg-blue-600 text-white font-semibold w-32 h-9 rounded-md pl-4"} />
                        </div>
                        <div className="relative flex justify-between items-center">
                            <FaGithub className="absolute top-1/2 -translate-y-1/2 left-[11px] text-white" />
                            <Button text="Github" to="/option" className={"bg-black text-white font-semibold w-32 h-9 rounded-md pl-4"} />
                        </div>
                    </div>

                    <p className="text-center text-secondary3 text-[15px] mt-7">Don&apos;t have an account? <Link to="/signup"><span className="text-primary1 font-semibold">Sign Up</span></Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn