import Button from "../../components/Button"
import OnboardHead from "../../components/OnboardHead"

const Onboard3 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen p-6 relative">
            <OnboardHead image={"/onboard3.svg"} heading={"Engage with Expert Instructors"} desc={"Connect with knowledgeable tutors for personalized guidance."} width={250} />

            <div className="flex gap-[12px] justify-between items-center">
                <div className="w-2 h-2 bg-secondary2  rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-primary1 rounded-full mt-7"></div>
                <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
            </div>

            <Button text="Continue" to="/onboard4" className={"bg-primary1 text-white font-semibold w-60 h-10 rounded-lg"} linkClass={"mt-8 absolute bottom-8"} />
        </div>
    )
}

export default Onboard3