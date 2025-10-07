import React, { useState, useEffect } from 'react'

const userCard = () => {

    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
                const res = await fetch(`${API_URL}/users`);
                if (!res.ok) {
                  console.error("HTTP error:", res.status);
                }
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error("Error fetching user", err)
            } finally {
                setLoading(false)
            }
        }

        fetchUser();
    }, [])

    if (loading) return <p>Loading users...</p>

  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      {users.map((user, idx) => (
        <div
          key={idx}
          className="w-80 p-4 bg-white shadow-md rounded-xl flex flex-col items-start"
        >
          <h2 className="text-xl font-bold">Username: {user.username}</h2>
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-500">Password: {user.password}</p>
        </div>
      ))}
    </div>
  )
}

export default userCard