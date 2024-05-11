import { Link, useParams } from "react-router-dom"
import allCourse from "../../data"
import { FaClock, FaMedal } from "react-icons/fa"
import Button from "../../components/Button"

const PaymentOverview = () => {
    const id = useParams().id
    const course = allCourse.find((course) => course.id == id)

    return (
        <div className="w-full relative">
            <div className="flex justify-center items-center p-10">
                <img src="/overview1.svg" alt="" className="mt-9 w-full h-full" />
            </div>
            <Link to={`/course/${course.id}`}><img src="/icons/arrow-left-line.svg" alt="" className="absolute top-3 left-0 m-4 z-10 w-8" /></Link>

            <div className="px-5">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[22px] text-center font-bold text-darkPrimary mt-2">Overview</h1>
                    <p className="text-lg text-primary1 mt-1"><span className="font-bold">Course Name:</span> {course.title}</p>
                </div>
                <div className="px-3 mt-5">
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex gap-3 items-center">
                            <img src="/icons/book-fill.svg" alt="" className="w-4" />
                            <p className="text-[15px] font-semibold text-secondary3">50+ Lectures</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-3 items-center">
                            <FaClock className="w-[15px] text-darkPrimary" />
                            <p className="text-[15px] font-semibold text-secondary3">4 Weeks</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-3 items-center">
                            <FaMedal className="w-4 text-darkPrimary" />
                            <p className="text-[15px] font-semibold text-secondary3">Online Certificate</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-[22px] font-bold text-primary1 mt-5">Skills</h1>
                <div className="flex gap-3 mt-2 mb-6 flex-wrap">
                    {
                        course.skills.map((skill, index) => {
                            return (
                                <p key={index} className="text-[13px] text-primary1 font-semibold p-2 border border-primary2/50 rounded-full">{skill}</p>
                            )
                        })
                    }
                </div>

                <div className="flex justify-between items-center mb-2.5">
                    <div className="flex justify-start items-center gap-2">
                        <img src="/icons/money-dollar-circle-fill.svg" alt="" />
                        <h1 className="text-lg font-semibold text-darkPrimary">Total Price</h1>
                    </div>
                    <p className="font-bold text-xl text-darkPrimary">{course.price}$</p>
                </div>
                <hr className="h-0.5 w-full bg-secondary2/40" />


                <div className="flex justify-center items-center mt-7">
                    <Button text="Enroll Now" to={`/payment/method/${course.id}`} className={"bg-primary1 text-white w-64 h-10 rounded-md "} linkClass={"mt-2 mb-6"} />
                </div>
            </div>
        </div>
    )
}

export default PaymentOverview