const Hero = () => {
    return (
        <div className="container mt-32 py-10 px-20 h-[70vh]">
            <div className="flex items-center justify-between">
                <div className="flex flex-col max-w-[60%] ml-20">
                    <h1 className="text-5xl font-bold mb-3">Write your Landing Title</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    <div className="mt-5 flex justify-start items-center gap-4">
                        <a href="/" className="border-2 border-blue-600 px-4 py-2 rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">Authors</a>
                        <a href="/" className="border-2 border-gray-400 text-gray-500 px-4 py-2 rounded-xl">Check Demos</a>
                    </div>
                </div>
                <div className="max-w-[30%] -mr-10">
                    <img src="/iPhone13.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero