const Complete = () => {
    return (
        <div className="bg-[#689873] w-full h-screen">
            <div className="flex flex-col items-center justify-center p-8">
                <img src="/image1.svg" alt="" width={240} className="mt-20" />
                <h1 className="text-3xl font-bold mt-8 text-white text-center">Order Complete!!</h1>

                <a href="/home" className="px-12 py-3 mt-14 rounded-full bg-[#5A8463] text-white">Back to home</a>
            </div>
        </div>
    )
}

export default Complete