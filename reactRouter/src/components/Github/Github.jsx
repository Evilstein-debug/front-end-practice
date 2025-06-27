import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github () {

    const data = useLoaderData()
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userName.trim()) {
            window.location.href = `/github/${userName}`
        }

    }

    // const [data, setData] = useState("")

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Evilstein-debug')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return(
        <>
        <div className="flex flex-col justify-center mt-2 items-center text-3xl text-white text-center bg-gray-500 rounded-xl p-5 m-5">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={userName}
                placeholder="Enter Github Username"
                onChange={(e) => {setUserName(e.target.value)}}
                className="text-black p-2 rounded mb-4"
                />
                <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
            Github Followers: {data.followers}
            <br />
            Public Repos: {data.public_repos}
            <img
            className="rounded-lg h-70 w-70 m-4"
            src={data.avatar_url} alt="user_avatar" />
        </div>
        </>
    )
}

export const githubInfoLoader = async ({ params }) => {
    const userName = params.userName || "Evilstein-debug"
    const response = await fetch (`https://api.github.com/users/${userName}`)
    if(!response.ok) {
        throw new Error('User not found')
    }
    return response.json()
}