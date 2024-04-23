import { useState } from "react"
import { FaChevronLeft, FaMinus, FaPlus } from "react-icons/fa"
import { HiBuildingOffice2 } from "react-icons/hi2"

const Details = () => {
    const [count, setCount] = useState(1)
    let cost = 10.00

    return (
        <div>
            <div className="relative">
                <img src="/details1.svg" alt="" className="w-full h-[290px] object-cover" />
                <a href="/home" className="absolute bottom-3 left-3 text-white">
                    <FaChevronLeft size={28} />
                </a>
            </div>

            <div className="flex justify-between items-center p-4">
                <div>
                    <h1 className="text-2xl font-semibold">Burger</h1>
                    <h1>${(count * cost).toFixed(2)}</h1>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button onClick={() => setCount(count + 1)}><FaPlus /></button>
                    <h1 className="w-4 text-center">{count}</h1>
                    <button onClick={() => setCount(count < 1 ? 0 : count - 1)}><FaMinus /></button>
                </div>
            </div>

            <div className="flex flex-col justify-between items-start px-4">
                <h1 className="text-xl font-semibold">Recipe</h1>
                <p className="mt-1 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus architecto incidunt quam nihil modi eum quod aliquam quaerat totam praesentium.</p>
            </div>

            <div className="px-4 mt-3">
                <div className="flex justify-start items-center gap-2">
                    <div className="border-2 border-black rounded-lg w-10 h-10 flex justify-center items-center">
                        <HiBuildingOffice2 size={28} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold">Delivery Location</h1>
                        <p className="text-xs">The Shard - Room 29</p>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="border-2 border-black rounded-lg w-10 h-10 flex justify-center items-center">
                        <HiBuildingOffice2 size={28} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold">Delivery Location</h1>
                        <p className="text-xs">The Shard - Room 29</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details