import React from 'react'; 

export const handleSignUp = async (username, password, email) => {
    try {
        const res = await fetch("http://localhost:8080/signup", {
            method: "POST",
            header: {
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