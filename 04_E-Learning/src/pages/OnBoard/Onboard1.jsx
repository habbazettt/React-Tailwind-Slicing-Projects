import Button from "../../components/Button"
import OnboardHead from "../../components/OnboardHead"
import Splash from "../Splash"
import { useEffect, useState } from "react"

const Onboard1 = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {isLoading ? <Splash /> :
                <div className="flex flex-col justify-center items-center h-screen w-screen p-6 relative">
                    <OnboardHead image={"/onboard1.svg"} width={320} heading={"Enter the World of E-Learning"} desc={"Begin your educational journey with access to a diverse range of courses."} />

                    <div className="flex gap-[12px] justify-between items-center">
                        <div className="w-2 h-2 bg-primary1 rounded-full mt-7"></div>
                        <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
                        <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
                        <div className="w-2 h-2 bg-secondary2 rounded-full mt-7"></div>
                    </div>
                    <Button text="Continue" to="/onboard2" className={"bg-primary1 text-white font-semibold w-60 h-10 rounded-lg"} linkClass={"mt-6 absolute bottom-8"} />
                </div>
            }
        </>
    )
}

export default Onboard1