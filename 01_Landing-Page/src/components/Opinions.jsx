import { BsChatFill } from "react-icons/bs"
import { FaStar, FaStarHalf } from "react-icons/fa"

const Opinions = () => {
    return (
        <div className="mt-44 py-10 px-20 bg-[#FFBE0B]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold">Opinions</h1>
                    <p className="text-center max-w-[80%]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="flex items-center mt-10 p-8 bg-white rounded-xl w-[84%] gap-4 shadow-md">
                    <div>
                        <BsChatFill size={50} className="text-blue-600" />
                    </div>
                    <div>
                        <div className="flex items-center justify-start gap-2">
                            <h1 className="text-xl font-bold">Jones David</h1>
                            <div className="flex text-[#FFBE0B]">
                                <FaStar size={20} />
                                <FaStar size={20} />
                                <FaStar size={20} />
                                <FaStar size={20} />
                                <FaStarHalf size={20} />
                            </div>
                        </div>
                        <h1>CEO Jones Inc</h1>
                        <p className="text-sm text-gray-600 mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opinions