import { useState } from "react"
import axios, { Axios } from 'axios'
import { useNavigate } from "react-router-dom";

export default function signUp(){

    const [name,setName]=useState()
    const [email,SetEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/register",{name,email,password})
        .then(result=>{console.log(result)
        navigate("/login")
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><center>Sign Up</center></h2>
            </div>

        </div>
    )
}