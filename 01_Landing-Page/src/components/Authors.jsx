import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Authors = () => {
    return (
        <div className="mt-32 py-10 px-20 h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-4xl font-bold">Authors</h1>
                    <p className="text-center max-w-[70%]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="flex flex-col items-start justify-between mt-10 max-w-[90%] gap-16">
                    <div className="flex items-center gap-6">
                        <img src="/public/Face.svg" alt="" className="border-4 border-blue-400 rounded-full" />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold">John Doe</h2>
                            <h1 className="text-lg text-gray-600">Designer</h1>
                            <p className="mt-1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                                nostrud amet.</p>
                            <div className="flex gap-3 mt-3">
                                <FaLinkedinIn size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                                <FaInstagram size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                                <FaGithub size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 ">
                        <img src="/Face.svg" alt="" className="border-4 border-blue-400 rounded-full" />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold">John Doe</h2>
                            <h1 className="text-lg text-gray-600">Designer</h1>
                            <p className="mt-1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                                nostrud amet.</p>
                            <div className="flex gap-3 mt-3">
                                <FaLinkedinIn size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                                <FaInstagram size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                                <FaGithub size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 ">
                        <img src="/Face.svg" alt="" className="border-4 border-blue-400 rounded-full" />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold">John Doe</h2>
                            <h1 className="text-lg text-gray-600">Designer</h1>
                            <p className="mt-1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                                nostrud amet.</p>
                            <div className="flex gap-3 mt-3">
                                <FaLinkedinIn size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                                <FaInstagram size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                                <FaGithub size={26} className="text-blue-600 hover:text-blue-400 transition-all duration-150 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authors