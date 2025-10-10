import React, { useState } from 'react'

function RegistrationForm() {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!username || !email || !password) {
      setErrors("All fields are required");
      return;
    }

    if (!email) {
      setErrors("Email is required");
      return;
    }

    if (!password) {
      setErrors("Password is required");
      return;
    }
        setError("")

        console.log("From submiited")
        console.log("Username", username)
        console.log("Email", email)
        console.log("Password", password)

        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <h2>Registration Form</h2>
            {errors && <p style={{ color: "red" }}>{errors}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" value={username} placeholder='Enter username'onChange={(e) =>setUsername(e.target.value)} />

                <label>Username</label>
                <input type="email" value={email} placeholder='Enter email' onChange={(e) =>setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} placeholder='Enter password'onChange={(e) =>setPassword(e.target.value)} />

                <button type = 'submit'>Register</button>
    
            </form>
        </div>
    )
}

export default RegistrationForm