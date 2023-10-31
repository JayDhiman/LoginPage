import React, { useState } from 'react'

function Login() {
    const [email, setEmail]  = useState("")
    const [password, setPassword] = useState("");

    const handleEmail = (e) => setEmail(e.target.value) ;
    const handlePassword = (e) => setPassword(e.target.value) ;
      
    const handleSubmit = (e)=>{
        e.preventDefault;
     
    }


  

  return (
    <>
    <div className="w-full m-auto max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="username"
      type="email" 
      placeholder="Username"
      value={email}
      onChange={handleEmail}
     
      />


    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>

      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      type="password" 
      placeholder="******************" 
      value={password}
      onChange={handlePassword}
      
      />

  
    </div>

    <div className="flex items-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
      onClick={handleSubmit}>
        Sign In
      </button>
      
    </div>
  </form>
 
</div>
</>
  )
}

export default Login