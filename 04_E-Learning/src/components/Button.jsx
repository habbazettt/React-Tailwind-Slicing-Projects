import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Button = ({ to, text, className, linkClass }) => {
    return (
        <Link to={to} className={linkClass}>
            <button className={className}>{text}</button>
        </Link>
    )
}

export default Button