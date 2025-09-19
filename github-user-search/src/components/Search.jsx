import React, { useState } from "react";
import fetchUserData  from "../services/githubServices"

function Search() {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleInputChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim()) {
            setLoading(true)
            setError(null)
            setUserData(null)

            fetchUserData(username)
                .then((data) => {
                    if (data) {
                        setUserData(data)
                    } else {
                        setError("Looks like we cant find the user")
                    }
                })
                .catch(() => {
                    setError("An error occurred while fetching user data")
                })
                .finally(() => {
                    setLoading(false)
                })
            setUsername("")
        }
    }
            return (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text" value={username} placeholder="Enter Github user..." onChange={handleInputChange} />
                        <button type='submit'>Submit</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
</div>
)
}


export default Search