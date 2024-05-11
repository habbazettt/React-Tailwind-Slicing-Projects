import Button from "../components/Button"

const Option = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen text-center px-6">
            <img src="/option.svg" alt="" width={270} />

            <h1 className="text-2xl text-center font-extrabold text-darkPrimary mt-7">Unlock Your Learning Potential</h1>
            <p className="text-center text-secondary3 text-[17px] mt-3">Your gateway to personalized courses, And guidance for success.</p>

            <div className="flex justify-between gap-3 mt-5">
                <Button text={"Sign In"} to={"/signin"} className={"bg-primary1 text-white font-semibold w-32 h-10 rounded-md"} />
                <Button text={"Sign Up"} to={"/signup"} className={"border border-primary1 bg-transparent text-primary1 font-semibold w-32 h-10 rounded-md"} />
            </div>
        </div>
    )
}

export default Option