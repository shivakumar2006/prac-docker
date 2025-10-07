import React from 'react'; 

export const handleSignUp = async (username, password, email) => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

    try {
        const res = await fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                username, 
                email,
                password,   
            }),
        });

        const data = await res.json();
        console.log("Signup response : ", data);
        return data;
    } catch (err) {
        console.log("Signup Error : ", err)
    }
}