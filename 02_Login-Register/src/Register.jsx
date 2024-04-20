const Register = () => {
    return (
        <div className="flex flex-col px-9 pt-10">
            <div className="ml-16">
                <img src="/logo.svg" width={300} />
            </div>
            <div className="flex items-center justify-center p-10">
                <h1 className="text-4xl font-bold">Daftar</h1>
            </div>
            <div className="flex flex-col items-start gap-2 -mt-3">
                <label htmlFor="email" className="text-lg">Masukkan Email</label>
                <input type="email" name="email" id="email" className="px-4 py-2 border rounded-lg border-[#4285F4] w-full" placeholder="Email" />
            </div>
            <div className="flex flex-col items-start gap-2 mt-3">
                <label htmlFor="password" className="text-lg">Masukkan Password</label>
                <input type="password" name="password" id="password" className="px-4 py-2 border rounded-lg border-[#4285F4] w-full" placeholder="Password" />
            </div>
            <div className="flex flex-col items-start gap-2 mt-3">
                <label htmlFor="password" className="text-lg">Masukkan Kembali Password</label>
                <input type="password" name="password" id="password" className="px-4 py-2 border rounded-lg border-[#4285F4] w-full" placeholder="Password" />
            </div>
            <div className="flex flex-col text-sm gap-1 mt-3">
                <h1>Sudah Punya Akun?</h1>
                <a href="/" className="text-[#4285F4]">Masuk</a>
            </div>
            <div className="flex items-center justify-center">
                <a href="/" className="px-10 py-2 bg-[#4285F4] text-white rounded-lg mt-8">Daftar</a>
            </div>
        </div>
    )
}

export default Register