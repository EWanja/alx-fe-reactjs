import axios from "axios";

async function fetchUserData(username, location, minRepos, page = 1) {
    
    try {
        let query = username ? `${username} in:login`:""
        if (location) query += `location:${location}`
         if (minRepos) query += ` repos:>${minRepos}`
        
       
        const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
    );

    return response.data; // contains { total_count, items }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return { items: [], total_count: 0 };
  }
}

export async function fetchUserDetails(username) {
  try {
    const res = await axios.get(`https://api.github.com/users/${encodeURIComponent(username)}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching user details:", error?.message || error);
    return null;
  }
}


export default fetchUserData