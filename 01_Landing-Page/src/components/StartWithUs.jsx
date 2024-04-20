import { FaStar, FaStarHalf } from "react-icons/fa"

const StartWithUs = () => {
    return (
        <div className="mt-24 pt-10 pb-32 px-20">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold">Start With Us!</h1>
                    <p className="text-center max-w-[80%]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="flex justify-between items-center mt-20 gap-24">
                    <img src="/iPhone13.svg" alt="" />
                    <div>
                        <div className="flex items-center justify-start gap-3">
                            <div className="flex items-center gap-1 text-[#FFBE0B]">
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStarHalf size={24} />
                            </div>
                            <h1 className="text-sm">203 Reviews</h1>
                        </div>
                        <h1 className="text-5xl font-bold text-blue-600 mt-4">My product title</h1>
                        <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        <div className="mt-6">
                            <a href="/" className="border-2 border-blue-600 px-4 py-2 rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="mt-20 w-[40%] flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl font-bold">Waiting for discount?</h1>
                    <input type="text" placeholder="Enter your email" className="border-2 border-blue-600 px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-300  hover:text-white transition-all duration-200 w-full" />
                    <input type="submit" value="I'm waiting for discount" className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-200 w-full cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default StartWithUs