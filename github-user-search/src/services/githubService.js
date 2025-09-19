import axios from "axios";

async function fetchUserData(username) {

    try {
        
        const response = await axios.get (`https://api.github.com/users/${username}`)
        if (!response.ok) throw new Error("User not found")
    
        return response.json()

    } catch (error) {
            console.error("Error fetching user data:", error.message)
            return null
         }
        }
    


export default fetchUserData