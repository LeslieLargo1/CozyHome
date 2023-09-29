import React, { useState } from "react"
import "./styles/style.css"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate()
    // const { setToken } = useAuth()
    const [feedbackMessage, setFeedbackMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFeedbackMessage("Signing in...")
    }


    return (
        <div className="sign-main">
            <div className="signLeft">
                <h1 className="sign-text">Welcome Back to Your Cozy Home!</h1>
            </div>
            <div className="sign-container">
                <h1>Sign In</h1>
                <form className="form-sections" onSubmit={handleSubmit}>

                    <div className="emailSection">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="inputText"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="passwordSection">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="sign-button" type="submit">Sign In</button>
                </form>
                <div className="redirect-to-login">
                    <p>
                        Don't have an account yet?{" "}
                        <span onClick={() => navigate("/register")} className="register">  Register</span>
                    </p>
                </div>
                <div className="feedbackMessage">{feedbackMessage}</div>
            </div>
        </div>

    )
}

export default Login