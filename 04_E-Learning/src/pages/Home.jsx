import { FaSearch, FaStar } from "react-icons/fa"
import Navbar from "../components/Navbar"
import allCourse from '../data.js'
import { Link } from "react-router-dom"

const Home = () => {
    const continueCourse = allCourse.filter((course) => course.category === 'inprogress')
    return (
        <div className='w-screen'>
            <div className="flex justify-between items-center p-6 mt-2">
                <h1 className="text-2xl font-bold">Welcome, User</h1>
                <Link to={'/notification'}><img src="/icons/notification-2-fill.svg" width={24} /></Link>
            </div>
            <div className="flex justify-between items-center px-6 relative">
                <input type="text" name="searchCourse" id="searchCourse" placeholder="Search Course" className="border border-darkPrimary rounded-lg px-3 py-2 w-full" />
                <FaSearch width={24} className="text-darkPrimary absolute right-10 top-1/2 -translate-y-1/2" />
            </div>
            <div className="flex flex-col justify-between items-start px-6 mt-4">
                <h1 className="text-[22px] font-extrabold text-darkPrimary">Continue Watching</h1>
                {
                    continueCourse.map((course, index) => {
                        return (
                            <div key={index} className={`flex gap-4 ${index == 0 ? 'mt-3' : 'mt-4'} w-full h-[98px]`}>
                                <img src={course.image} alt="" width={100} className="object-cover rounded-md" />
                                <div className="flex flex-col py-[4px] justify-between w-full">
                                    <h1 className="text-[15px] font-bold text-darkPrimary">{course.title}</h1>
                                    <p className="text-primary2 text-xs">{course.author}</p>
                                    <div className="flex gap-1 items-center mt-1">
                                        <FaStar className="text-primary1" size={12} />
                                        <p className="text-primary1 text-[10px]">{course.rate}</p>
                                    </div>
                                    <div className="relative">
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
            </div>
            <div className="flex flex-col justify-between items-start px-6 mt-6 relative">
                <h1 className="text-[22px] font-bold text-darkPrimary">Suggestion for you</h1>
                <p className="absolute right-5 top-1/2 -translate-y-1/2 text-xs underline text-secondary3">see all</p>
            </div>
            <Navbar />
        </div>
    )
}

export default Home