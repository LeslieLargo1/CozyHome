import React, { useState } from "react"
import "./styles/style.css"
import { useNavigate } from "react-router-dom"

const Register = () => {

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
        setFeedbackMessage("Registering...")
    }


    return (
        <div className="register-main">
            <div className="registerLeft">
                <h1 className="register-text">Welcome Extra Income ? Become a Host.</h1>
            </div>
            <div className="register-container">
                <h1>Register</h1>
                <form className="form-sections" onSubmit={handleSubmit}>
                    <div className="userSection">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <button className="register-button" type="submit">Register</button>
                </form>
                <div className="redirect-to-login">
                    <p>
                        Dont want an account?{" "}
                        <span onClick={() => navigate("/")} className="home">  Home</span>
                    </p>
                </div>
                <div className="feedbackMessage">{feedbackMessage}</div>
            </div>
        </div>

    )
}

export default Register

