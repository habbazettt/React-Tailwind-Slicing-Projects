import { useState } from "react"
import { AiFillHeart } from "react-icons/ai"
import { BsCartPlus } from "react-icons/bs"
import { FaHome, FaSearch } from "react-icons/fa"
import { FaCartShopping, FaChevronLeft } from "react-icons/fa6"
import { HiBuildingOffice2 } from "react-icons/hi2"

const Home = () => {
    const [count, setCount] = useState(1)

    return (
        <div className="py-4 px-6">
            <div className="flex justify-between items-center">
                <a href="/" className=" hover:bg-[#5A8463] hover:text-white rounded-full p-2 transition-all duration-200"><FaChevronLeft size={28} /></a>
                <FaSearch size={28} />
            </div>
            <div className="mt-5">
                <h1 className="text-4xl font-semibold">Work Place</h1>
                <p className="text-gray-500 text-lg">Choose the meal</p>
            </div>
            <div className="grid grid-cols-4 mt-4 max-w-[80%]">
                <div className="border-2 border-black rounded-lg w-12 h-12 flex justify-center items-center">
                    <HiBuildingOffice2 size={30} />
                </div>
                <div className="border-2 border-gray-400 rounded-lg w-12 h-12 flex justify-center items-center">
                    <FaHome size={30} />
                </div>
                <div className="border-2 border-gray-400 rounded-lg w-12 h-12 flex justify-center items-center">
                    <AiFillHeart size={30} />
                </div>
                <div className="border-2 border-gray-400 rounded-lg w-12 h-12 flex justify-center items-center relative">
                    <div className="text-sm text-white text-center px-3 py-1 rounded-full bg-red-600 absolute -top-2 -right-3">{count}</div>
                    <FaCartShopping size={30} />
                </div>
            </div>
            <div className="grid grid-cols-2 mt-6 relative gap-2">
                <div className="flex flex-col items-center justify-center py-4 border-2 border-gray-400 rounded-xl relative">
                    <a href="/details"><img src="/menu1.png" alt="" width={130} /></a>
                    <h1 className="mt-3">Hamburger</h1>
                    <p className="font-bold">$10.00</p>
                    <div className="absolute bg-[#5A8463] text-white rounded-full p-1.5 bottom-2 left-3 cursor-pointer">
                        <BsCartPlus onClick={() => setCount(count + 1)} size={20} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-4 border-2 border-gray-400 rounded-xl relative">
                    <img src="/menu1.png" alt="" width={130} />
                    <h1 className="mt-3">Hamburger</h1>
                    <p className="font-bold">$10.00</p>
                    <div className="absolute bg-[#5A8463] text-white rounded-full p-1.5 bottom-2 left-3 cursor-pointer">
                        <BsCartPlus size={20} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-4 border-2 border-gray-400 rounded-xl relative">
                    <img src="/menu1.png" alt="" width={130} />
                    <h1 className="mt-3">Hamburger</h1>
                    <p className="font-bold">$10.00</p>
                    <div className="absolute bg-[#5A8463] text-white rounded-full p-1.5 bottom-2 left-3 cursor-pointer">
                        <BsCartPlus size={20} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-4 border-2 border-gray-400 rounded-xl relative">
                    <img src="/menu1.png" alt="" width={130} />
                    <h1 className="mt-3">Hamburger</h1>
                    <p className="font-bold">$10.00</p>
                    <div className="absolute bg-[#5A8463] text-white rounded-full p-1.5 bottom-2 left-3 cursor-pointer">
                        <BsCartPlus size={20} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <a href="/checkout" className="bg-[#5A8463] text-white rounded-xl py-2 px-10 mt-6">Checkout Now</a>
            </div>
        </div>
    )
}

export default Home