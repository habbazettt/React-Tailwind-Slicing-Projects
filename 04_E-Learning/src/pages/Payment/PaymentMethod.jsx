/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom"
import allCourse from "../../data"
import Button from "../../components/Button"

const PaymentMethod = () => {
    const id = useParams().id
    const course = allCourse.find((course) => course.id == id)

    return (
        <div className="w-full relative h-screen">

            <div className="flex justify-center items-center p-10">
                <img src="/paymentMethod.svg" alt="" className="mt-9 w-full h-full" />
            </div>
            <Link to={`/payment/overview/${course.id}`}><img src="/icons/arrow-left-line.svg" alt="" className="absolute top-3 left-0 m-4 z-10 w-8" /></Link>

            <div className="px-5 relative">
                <h1 className="flex justify-center items-center text-xl text-center font-bold text-darkPrimary mt-2">Select payment method</h1>

                <div className="flex items-center mt-5">
                    <input type="radio" name="payment" id="credit" className="w-4 h-4 accent-primary1" />
                    <label htmlFor="credit" className="font-medium text-[16px] text-secondary3 ml-2">Credit / Debit Card</label>
                </div>

                <div className="ml-5 flex items-start gap-1 mt-0.5">
                    <img src="/paymentMethod/Visa.svg" width={54} alt="" />
                    <img src="/paymentMethod/Mastercard.svg" width={54} alt="" />
                    <img src="/paymentMethod/PayPal.svg" width={54} alt="" />
                    <img src="/paymentMethod/Maestro.svg" width={54} alt="" />
                </div>

                <div className="flex items-center mt-4">
                    <input type="radio" name="payment" id="jazzCash" className="w-4 h-4 accent-primary1" />
                    <label htmlFor="jazzCash" className="font-medium text-[16px] text-secondary3 ml-2">JazzCash / EasyPaisa</label>
                </div>

                <div className="flex justify-between items-center mt-44">
                    <div className="flex justify-start items-center gap-2">
                        <img src="/icons/money-dollar-circle-fill.svg" alt="" />
                        <h1 className="text-lg font-semibold text-darkPrimary">Total Price</h1>
                    </div>
                    <p className="font-bold text-xl text-darkPrimary">{course.price}$</p>
                </div>
                <hr className="my-2 border-secondary2" />

                <div className="flex justify-center items-center mt-5">
                    <Button text="Enroll Now" to={`/payment/details/${course.id}`} className={"bg-primary1 text-white w-64 h-10 rounded-md "} linkClass={"mt-2 mb-6"} />
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod