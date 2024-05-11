import { useState } from "react"
import Navbar from "../components/Navbar"
import allCourse from '../data.js'
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const Course = () => {
    const [isSaved, setIsSaved] = useState(true)
    const [isInProgress, setIsInProgress] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)

    const handleSaved = () => {
        setIsSaved(!isSaved)
        setIsInProgress(false)
        setIsCompleted(false)
    }
    const handleInProgress = () => {
        setIsInProgress(!isInProgress)
        setIsSaved(false)
        setIsCompleted(false)
    }
    const handleCompleted = () => {
        setIsCompleted(!isCompleted)
        setIsInProgress(false)
        setIsSaved(false)
    }

    const savedCourse = allCourse.filter((course) => course.category === 'saved')
    const inprogressCourse = allCourse.filter((course) => course.category === 'inprogress')
    const completedCourse = allCourse.filter((course) => course.category === 'completed')

    return (
        <div className='w-screen'>
            <div className="flex justify-between items-center p-6 mt-2">
                <h1 className="text-2xl font-bold text-darkPrimary">My Courses</h1>
                <Link to={'/notification'}><img src="/icons/notification-2-fill.svg" width={24} /></Link>
            </div>
            <div className="flex justify-start gap-2 items-center px-3 mt-3">
                {
                    isSaved ? <p className="text-white bg-darkPrimary py-2 px-5 rounded-full border border-darkPrimary">Saved</p> : <p onClick={handleSaved} className="text-darkPrimary bg-white py-2 px-5 rounded-full border border-darkPrimary">Saved</p>
                }
                {
                    isInProgress ? <p className="text-white bg-darkPrimary py-2 px-4 rounded-full border border-darkPrimary">In Progress</p> : <p onClick={handleInProgress} className="text-darkPrimary bg-white py-2 px-4 rounded-full border border-darkPrimary">In Progress</p>
                }
                {
                    isCompleted ? <p className="text-white bg-darkPrimary py-2 px-5 rounded-full border border-darkPrimary">Completed</p> : <p onClick={handleCompleted} className="text-darkPrimary bg-white py-2 px-5 rounded-full border border-darkPrimary">Completed</p>
                }
            </div>
            <div className="mb-[90px] px-4 mt-6">
                {
                    isSaved && savedCourse.map((course, index) => {
                        return (
                            <Link to={`/course/${course.id}`} key={index} className="flex gap-4 justify-start mt-4 p-2 shadow-xl rounded-xl">
                                <div className="relative">
                                    <div className="bg-darkPrimary/60 w-full h-full absolute top-0 left-0 rounded-lg" />
                                    <img src={course.image} alt="" width={90} height={100} className="object-cover rounded-lg w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[15px] font-bold text-darkPrimary">{course.title}</h1>
                                    <p className="text-primary2 text-xs">{course.author}</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <FaStar className="text-primary1" size={12} />
                                        <p className="text-[10px] text-darkPrimary">{course.rate}</p>
                                    </div>
                                    <div className="flex justify-between items-end mt-4">
                                        <p className="px-2 py-1 bg-darkPrimary text-white rounded-md text-[12px]">Enroll now</p>
                                        <div className="flex items-center justify-end gap-1">
                                            <img src="/icons/sold.svg" width={14} alt="" />
                                            <p className="text-[11px] font-semibold text-darkPrimary">{course.soldAmount}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                {
                    isInProgress && inprogressCourse.map((course, index) => {
                        return (
                            <div key={index} className="flex gap-4 justify-start mt-4 px-2 py-3 shadow-xl rounded-xl w-full h-full">
                                <div className="relative w-[40%] h-full">
                                    <div className="bg-darkPrimary/60 w-full h-full absolute top-0 left-0 rounded-lg" />
                                    <img src={course.image} alt="" width={90} height={100} className="object-cover rounded-lg w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[15px] font-bold text-darkPrimary">{course.title}</h1>
                                    <div className="flex items-center justify-between">
                                        <p className="text-primary2 text-xs">{course.author}</p>
                                        <div className="flex items-center gap-1 mt-1">
                                            <FaStar className="text-primary1" size={12} />
                                            <p className="text-[10px] text-darkPrimary">{course.rate}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-darkPrimary my-2">{course.desc.slice(0, 60)}...</p>
                                    <div className="relative w-full mt-2">
                                        <div className="w-full h-2 bg-secondary2/80 rounded-full mt-1 relative">
                                            <div style={{ width: `${course.progress}%` }} className="h-2 bg-primary1 rounded-full absolute top-0 left-0" />
                                        </div>
                                        <p className="text-primary2 text-[10px] mt-1 text-right absolute right-1 bottom-3">{course.progress}% progress</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    isCompleted && completedCourse.map((course, index) => {
                        return (
                            <div key={index} className="flex gap-4 justify-start mt-4 p-2 shadow-xl rounded-xl">
                                <div className="relative w-[40%] h-full">
                                    <div className="bg-darkPrimary/60 w-full h-full absolute top-0 left-0 rounded-lg" />
                                    <img src={course.image} alt="" height={100} className="object-cover rounded-lg w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[15px] font-bold text-darkPrimary">{course.title}</h1>
                                    <p className="text-primary2 text-xs">{course.author}</p>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <FaStar className="text-primary1" size={12} />
                                        <p className="text-[10px] text-darkPrimary">{course.rate}</p>
                                    </div>
                                    <p className="text-[11px] text-secondary3 my-1">{course.desc.slice(0, 60)}...</p>
                                    <div className="mt-1 flex justify-center items-center">
                                        <p className="text-center text-xs py-1.5 px-6 bg-primary1 text-white rounded-md">View your certificate</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className="text-center text-darkPrimary font-semibold underline -mt-6">Explore More Courses</p>
            <Navbar />
        </div>
    )
}

export default Course