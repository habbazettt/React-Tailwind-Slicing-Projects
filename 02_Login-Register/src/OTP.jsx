/* eslint-disable react-refresh/only-export-components */
const OTP = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, index1) => {
        input.addEventListener('keyup', (e) => {
            const currentInput = input
            const nextInput = input.nextElementSibling
            const prevInput = input.previousElementSibling

            if (currentInput.value.length > 1) {
                currentInput.value = ""
                return
            }

            if (nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
                nextInput.removeAttribute('disabled')
                nextInput.focus()
            }

            if (e.key === 'Backspace') {
                inputs.forEach((input, index2) => {
                    if (index1 <= index2 && prevInput) {
                        input.setAttribute('disabled', true)
                        currentInput.value = ''
                        prevInput.focus()
                    }
                })
            }
        })
    })
    window.addEventListener('load', () => {
        inputs[0].focus()
    })
    return (
        <div className="flex flex-col px-9 py-10">
            <div className="ml-16">
                <img src="/logo.svg" width={300} />
            </div>
            <div className="flex flex-col items-center justify-center py-10 gap-3">
                <h1 className="text-4xl font-bold">Verifikasi OTP</h1>
                <p className="text-center">Mengirim kode OTP, mohon tunggu sebentar...</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <input type="text" className="p-4 border-2 rounded-lg border-[#4285F4] w-14 text-center" />
                <input type="text" className="p-4 border-2 rounded-lg border-[#4285F4] w-14 text-center" disabled />
                <input type="text" className="p-4 border-2 rounded-lg border-[#4285F4] w-14 text-center" disabled />
                <input type="text" className="p-4 border-2 rounded-lg border-[#4285F4] w-14 text-center" disabled />
                <input type="text" className="p-4 border-2 rounded-lg border-[#4285F4] w-14 text-center" disabled />
            </div>
            <div className="flex items-center justify-center">
                <a href="/" className="px-10 py-2 bg-[#4285F4] text-white rounded-lg mt-20">Submit</a>
            </div>
        </div>
    )
}

export default OTP