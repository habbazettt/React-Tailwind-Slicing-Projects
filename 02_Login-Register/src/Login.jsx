const Login = () => {
    return (
        <div className="flex flex-col px-9 py-10">
            <div className="ml-16">
                <img src="/logo.svg" width={300} />
            </div>
            <div className="flex items-center justify-center p-10">
                <h1 className="text-4xl font-bold">Masuk</h1>
            </div>
            <div className="flex flex-col items-start gap-2">
                <label htmlFor="email" className="text-lg">Masukkan Email</label>
                <input type="email" name="email" id="email" className="px-4 py-2 border rounded-lg border-[#4285F4] w-full" placeholder="Email" />
            </div>
            <div className="flex flex-col items-start gap-2 mt-6">
                <label htmlFor="password" className="text-lg">Masukkan Password</label>
                <input type="password" name="password" id="password" className="px-4 py-2 border rounded-lg border-[#4285F4] w-full" placeholder="Password" />
            </div>
            <div className="flex justify-between mt-3">
                <div className="flex flex-col text-sm gap-1">
                    <h1>Belum punya akun?</h1>
                    <a href="/register" className="text-[#4285F4]">Daftar</a>
                </div>
                <a href="/forgot-password" className="text-[#4285F4] text-sm">Lupa Password?</a>
            </div>
            <div className="flex items-center justify-center">
                <a href="/otp" className="px-10 py-2 bg-[#4285F4] text-white rounded-lg mt-20">Masuk</a>
            </div>
        </div>
    )
}

export default Login