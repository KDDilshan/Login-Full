import { useState } from "react"
import axios, { Axios } from 'axios'
import { Link, useNavigate } from "react-router-dom";

export default function Login(){

    const [email,SetEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/login",{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                navigate("/home")
            }else{
                navigate("/register")
                alert("you are not Registerd to this service")
            }
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><center>Login</center></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text"
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e)=> SetEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                        placeholder="Enter password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Dont Have an Account</p>
                <Link to="/register" className="btn btn-defalt border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            </div>

        </div>
    )
}