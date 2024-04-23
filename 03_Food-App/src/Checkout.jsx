import { useState } from "react"
import { FaChevronLeft, FaCoins, FaMinus, FaPlus, FaStore } from "react-icons/fa"

const Checkout = () => {
    const [count, setCount] = useState(1)
    let cost = 10.00
    let tax = cost * 0.1
    return (
        <div>
            <div className="flex relative items-center justify-center shadow-md py-4 px-6 top-0 z-10">
                <a href="/home" className="absolute left-4"><FaChevronLeft size={26} /></a>
                <h1 className="text-xl font-semibold">Checkout</h1>
            </div>
            <div className="flex flex-col justify-center items-start px-4 py-3 mt-1">
                <h1 className="text-lg font-bold">Take your order at:</h1>
                <div className="mt-2 flex items-center gap-3">
                    <div className="p-2 bg-[#5A8463] rounded-full text-white flex justify-center items-center">
                        <FaStore size={26} />
                    </div>
                    <div>
                        <h1 className="font-semibold">Jatinangor Town Square</h1>
                        <p className="font-light text-gray-500"><span className="text-[#5A8463] font-semibold">0,1km</span> from your loaction</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-[8px] bg-gray-200 opacity-70" />

            <div className="mt-1 px-4 py-3 border-b-2 border-gray-300">
                <h1 className="text-xl font-bold">Order Details</h1>
                <div className={`${count < 1 ? "hidden" : "flex"}  justify-between items-center mt-3`}>
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="text-lg font-semibold">Hamburger</h1>
                        <p className="text-gray-500 text-sm">Regular Size</p>
                    </div>
                    <img src="/public/menu1.png" alt="" className="w-16 h-16" />
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <h1>${(count * cost).toFixed(2)}</h1>
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={() => setCount(count + 1)}><FaPlus /></button>
                        <h1 className="w-4 text-center">{count}</h1>
                        <button onClick={() => setCount(count < 1 ? 0 : count - 1)}><FaMinus /></button>
                    </div>
                </div>
            </div>

            <div className="">
                <h1 className="text-xl font-bold px-4 py-3">Payment Details</h1>
                <div className="flex justify-between items-center px-4">
                    <h1>Price</h1>
                    <h1>${(count * cost).toFixed(2)}</h1>
                </div>
                <div className={`${count < 1 ? "hidden" : "flex"} justify-between items-center px-4`}>
                    <h1>Tax</h1>
                    <h1>${tax.toFixed(2)}</h1>
                </div>
                <div className={`${count < 1 ? "hidden" : "flex"} justify-between items-center px-4 mt-3`}>
                    <h1 className="font-bold text-xl">Total</h1>
                    <h1 className="font-bold text-xl">${(count * cost + tax).toFixed(2)}</h1>
                </div>
                <hr className="my-4 mx-3 bg-black" />
                <div className="flex justify-center items-center gap-2">
                    <FaCoins className="text-yellow-500" />
                    <h1>You will get {count} coins</h1>
                </div>
                <div className="px-4 pb-20 mt-4">
                    <h1 className="text-sm font-bold">Cancelation Policy</h1>
                    <p className="text-xs font-light text-gray-500">You can cancel your order before 30 minutes of the order time</p>
                </div>
            </div>


            <div className="fixed bottom-0 left-0 w-full p-3 bg-white justify-center items-center flex z-10">
                <a href="/complete" className="px-8 py-2 rounded-lg bg-[#5A8463] text-white">Complete Payment</a>
            </div>
        </div>
    )
}

export default Checkout