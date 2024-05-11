import Button from "../../components/Button"
import OnboardHead from "../../components/OnboardHead"

const Onboard2 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen p-6 relative">
            <OnboardHead image={"/onboard2.svg"} width={320} heading={"Embark on Your Learning Adventure"} desc={"Explore interactive lessons, quizzes, and multimedia content to enhance your understanding."} />

            <div className="flex gap-[12px] justify-between items-center">
                <div className="w-2 h-2 bg-secondary2  rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-primary1 rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
            </div>

            <Button text="Continue" to="/onboard3" className={"bg-primary1 text-white font-semibold w-60 h-10 rounded-lg"} linkClass={"mt-8 absolute bottom-8"} />
        </div>
    )
}

export default Onboard2