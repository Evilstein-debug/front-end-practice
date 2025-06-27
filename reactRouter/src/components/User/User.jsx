import React from "react";
import { useParams } from "react-router-dom";

export default function User () {
    const {userid} = useParams()

    return(
        <>
        <div className="bg-gray-500 text-center rounded-xl m-5 text-3xl text-white p-5">User: {userid}</div>
        </>
    )
}