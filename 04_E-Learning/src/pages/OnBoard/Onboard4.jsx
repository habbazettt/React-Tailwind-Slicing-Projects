import Button from "../../components/Button"
import OnboardHead from "../../components/OnboardHead"

const Onboard4 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen p-6 relative">
            <OnboardHead image={"/onboard4.svg"} heading={"Personalize Your Learning Path"} desc={"Customize your learning with progress tracking, and interactive activities."} width={290} />

            <div className="flex gap-[12px] justify-between items-center">
                <div className="w-2 h-2 bg-secondary2  rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
                <div className="w-2 h-2  bg-secondary2 rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-primary1 rounded-full mt-7"></div>
            </div>

            <Button text="Continue" to="/option" className={"bg-primary1 text-white font-semibold w-60 h-10 rounded-lg"} linkClass={"mt-8 absolute bottom-8"} />
        </div>
    )
}

export default Onboard4