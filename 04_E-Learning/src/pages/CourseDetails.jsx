import { Link, useParams } from "react-router-dom"
import allCourse from '../data.js'
import { useState } from "react"
import { FaClock, FaMedal } from "react-icons/fa"
import Button from '../components/Button.jsx'

const CourseDetails = () => {
    const [saved, setSaved] = useState(false)

    const id = useParams().id
    const course = allCourse.find((course) => course.id == id)

    const handleSaved = () => {
        setSaved(!saved)
    }

    return (
        <div className="w-full relative">
            <div className="relative w-full">
                <img src="/icons/play.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14" />
                <div className="w-full h-full bg-darkPrimary/60 absolute" />
                <img src={course.backgroundImg} alt="" />
            </div>
            <div>
                {
                    saved ? (
                        <img src="/icons/bookmark-fill.svg" alt="" className="absolute top-0 right-0 m-4 z-10 w-10 rounded-lg p-2 bg-secondary1" onClick={handleSaved} />
                    ) : (
                        <img src="/icons/bookmark-line.svg" alt="" className="absolute top-0 right-0 m-4 z-10 w-10 rounded-lg p-2 bg-secondary1" onClick={handleSaved} />
                    )
                }
            </div>
            <Link to={'/course'}><img src="/icons/arrow-left-line-white.svg" alt="" className="absolute top-0 left-0 m-4 z-10 w-8" /></Link>


            <div className="px-6 relative">
                <h1 className="text-[22px] font-bold text-darkPrimary mt-3">{course.title}</h1>
                <p className="text-secondary3 text-[15px] font-semibold mt-1">{course.author}</p>
                <div className="flex gap-2 relative items-end mt-2">
                    <img src="/icons/sold.svg" alt="" className="w-4" />
                    <p className="text-primary1 font-semibold text-[13px] absolute -bottom-1 left-6">{(course.soldAmount / 1000).toFixed(1)}k students already enrolled</p>
                </div>
                <p className="absolute top-8 right-3 m-4 z-10 text-2xl font-bold text-darkPrimary">{course.price}$</p>
                <h1 className="mt-5 text-[22px] font-bold text-primary1">Course Details</h1>
                <p className="mt-0.5 text-[13px] text-secondary3">{course.desc}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aperiam sunt recusandae</p>

                <div className="px-3 mt-6">
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex gap-2">
                            <img src="/icons/book-fill.svg" alt="" className="w-4" />
                            <p className="text-[15px] font-semibold text-darkPrimary">Lectures</p>
                        </div>
                        <p className="text-xs font-semibold text-secondary3">50+ Lectures</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-2 items-center">
                            <FaClock className="w-[15px] text-darkPrimary" />
                            <p className="text-[15px] font-semibold text-darkPrimary">Learning Time</p>
                        </div>
                        <p className="text-xs font-semibold text-secondary3">4 Weeks</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-2 items-center">
                            <FaMedal className="w-4 text-darkPrimary" />
                            <p className="text-[15px] font-semibold text-darkPrimary">Certification</p>
                        </div>
                        <p className="text-xs font-semibold text-secondary3">Online Certificate</p>
                    </div>
                </div>

                <h1 className="text-[25px] font-bold text-primary1 mt-5">Skills</h1>
                <div className="flex gap-3 mt-2 mb-4 flex-wrap">
                    {
                        course.skills.map((skill, index) => {
                            return (
                                <p key={index} className="text-[13px] text-primary2 font-semibold p-2 border border-primary2/30 rounded-full">{skill}</p>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center items-center">
                    <Button text="Enroll Now" to={`/payment/overview/${course.id}`} className={"bg-primary1 text-white w-64 h-10 rounded-md "} linkClass={"mt-2 mb-6"} />
                </div>
            </div>
        </div>
    )
}

export default CourseDetails