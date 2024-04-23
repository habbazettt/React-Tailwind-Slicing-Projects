const App = () => {
  return (
    <div className="bg-[#689873] w-full h-screen">
      <div className="flex flex-col items-center justify-center p-10">
        <img src="/image1.svg" alt="" width={270} className="mt-16" />
        <h1 className="text-4xl font-bold mt-8 text-white">Welcome to</h1>
        <h1 className="text-4xl font-bold text-white">Just Order</h1>

        <a href="/home" className="px-12 py-3 mt-14 rounded-full bg-[#5A8463] text-white">Order Now</a>
      </div>
    </div>
  )
}

export default App