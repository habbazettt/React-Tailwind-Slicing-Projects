const ForgotPassword = () => {
    return (
        <div className="flex flex-col px-9 py-10">
            <div className="ml-16">
                <img src="/logo.svg" width={300} />
            </div>
            <div className="flex items-center justify-center p-10">
                <h1 className="text-[32px] font-bold">Lupa Password</h1>
            </div>
            <div className="flex flex-col items-start gap-2">
                <h1 className="font-semibold">Pesan:</h1>
                <p className="text-sm">Masukan email Anda dan tunggu kode OTP akan dikirimkan.</p>
            </div>
            <div className="flex flex-col items-start gap-2 mt-6">
                <label htmlFor="email" className="text-lg">Masukkan Email</label>
                <input type="emial" name="email" id="email" className="px-4 py-2 border rounded-lg border-[#4285F4] w-full" placeholder="Email" />
            </div>
            <div className="flex items-center justify-center mt-14">
                <a href="/" className="px-10 py-2 bg-[#4285F4] text-white rounded-lg mt-20">Kirim</a>
            </div>
        </div>
    )
}

export default ForgotPassword