import { Link, useParams } from "react-router-dom"
import allCourse from "../../data"
import Button from "../../components/Button"

const PaymentDetails = () => {
    const id = useParams().id
    const course = allCourse.find((course) => course.id == id)

    return (
        <div className="w-full relative h-screen">

            <div className="flex justify-center items-center p-10">
                <img src="/paymentMethod.svg" alt="" className="mt-9 w-full h-full" />
            </div>
            <Link to={`/payment/method/${course.id}`}><img src="/icons/arrow-left-line.svg" alt="" className="absolute top-3 left-0 m-4 z-10 w-8" /></Link>

            <div className="px-5">
                <h1 className="flex justify-center items-center text-xl text-center font-bold text-darkPrimary mt-2">Add Card Details</h1>

                <input type="text" className="w-full border border-darkPrimary rounded-lg p-3 mt-5" placeholder="Card Number" />
                <div className="flex justify-between gap-4">
                    <input type="text" className="w-1/2 border border-darkPrimary rounded-lg p-3 mt-5" placeholder="CVV Number" />
                    <input type="text" className="w-1/2 border border-darkPrimary rounded-lg p-3 mt-5" placeholder="Expiry Date" />
                </div>
                <input type="text" className="w-full border border-darkPrimary rounded-lg p-3 mt-5" placeholder="Name on Card" />
                <p className="text-secondary3 text-[13px] mt-2">We will store and use your card details for smooth and secure future purchases.  </p>

                <div className="flex justify-between items-center mt-14">
                    <div className="flex justify-start items-center gap-2">
                        <img src="/icons/money-dollar-circle-fill.svg" alt="" />
                        <h1 className="text-lg font-semibold text-darkPrimary">Total Price</h1>
                    </div>
                    <p className="font-bold text-xl text-darkPrimary">{course.price}$</p>
                </div>
                <hr className="my-2 border-secondary2" />

                <div className="flex justify-center items-center mt-5">
                    <Button text="Enroll Now" to={`/payment/complete/${course.id}`} className={"bg-primary1 text-white w-64 h-10 rounded-md "} linkClass={"mt-2 mb-6"} />
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails