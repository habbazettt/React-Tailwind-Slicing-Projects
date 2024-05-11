/* eslint-disable react/prop-types */
const OnboardHead = ({ image, heading, desc, width }) => {
    return (
        <>
            <img src={image} alt="" width={width} />
            <h1 className="text-2xl text-center font-extrabold text-darkPrimary mt-11">{heading}</h1>
            <p className="text-center text-secondary3 text-[17px] mt-3">{desc}</p>
        </>
    )
}

export default OnboardHead