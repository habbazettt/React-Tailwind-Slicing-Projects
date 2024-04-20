const Navbar = () => {
    return (
        <div className="fixed top-0 z-10 w-full py-4 px-6 shadow-md bg-white">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Landing Page</h1>
                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-4">
                        <li>Authors</li>
                        <li>For Who</li>
                        <li>Check Demo</li>
                        <li>Opinions</li>
                    </ul>
                    <div className="border-2 border-blue-600 px-4 py-2 rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                        <a href="/">Buy Now!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar