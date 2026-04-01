import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useState } from 'react'

export const Route = createFileRoute('/test/John2/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");
async function signin (){
  const login={
    email,password
  }
  try{
    const res=await axios.post("http://localhost:3000/auth/sign-in",login)
    setOutput (JSON.stringify(res.data))
  } catch(error:any){
    setOutput(JSON.stringify (error.response.data.message))
  }
} 

  return <>
    <h1 className="text-2xl text-center p-4" >Log In</h1>
    <div className="bg-gray-200 p-4">
      <div>Email</div>
      <input onChange={(e) => { setEmail(e.target.value) }} className="border border-gray-700"></input>
      <div>Password</div>
      <input onChange={(e) => { setPassword(e.target.value) }} className="border border-gray-700"></input>
        

    </div >
      
    <div className="flex justify-center p-2"> 
      <button onClick={() => { signin() }} className="p-2 border border-gray-700 rounded-xl bg-blue-300">Log In </button>
    </div>
    <div className="p-4">
      {output}
    </div>
    
  </>


}
