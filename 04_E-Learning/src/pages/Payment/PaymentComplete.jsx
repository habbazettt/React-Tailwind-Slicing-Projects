import { Link } from "react-router-dom"
import Button from "../../components/Button"


const PaymentComplete = () => {

    return (
        <div className="w-full h-screen relative">
            <div className="flex justify-center items-center p-10">
                <img src="/paymentComplete.svg" alt="" className="mt-9 w-full h-full" />
            </div>
            <Link to={`/course`}><img src="/icons/arrow-left-line.svg" alt="" className="absolute top-3 left-0 m-4 z-10 w-8" /></Link>

            <div className="flex justify-center items-center flex-col gap-6">
                <img src="/completed.svg" alt="" className="w-[50px]" />
                <img src="/completedIllustration.svg" alt="" className="w-[280px]" />
            </div>

            <h1 className="text-center font-bold text-darkPrimary mt-4 text-xl">Congratulations!</h1>
            <p className="text-center font-semibold text-darkPrimary text-[17px] mt-2 text-lg">Start Your Learning Today</p>

            <div className="flex justify-center items-center mt-5">
                <Button text="Continue" to={`/course`} className={"bg-primary1 text-white w-72 h-10 rounded-[4px] "} linkClass={"mt-1 mb-2"} />
            </div>
        </div>
    )
}

export default PaymentComplete