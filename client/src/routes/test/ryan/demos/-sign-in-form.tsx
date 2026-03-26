import axios from "axios";
import { useState } from "react";

const serverUrl = import.meta.env.VITE_API_URL;

export function SignInForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [isFailed, setIsFailed] = useState(false);

  async function submitSignInForm() {
    const login = {
      email,
      password
    }

    setIsFailed(false);
    setOutput("");
    setIsLoading(true);

    try {
      const res = await axios.post(serverUrl + "/auth/sign-in", login);
      console.log(res);

      localStorage.setItem("access_token", res.data.access_token)
      console.log(localStorage.getItem("access_token"))

      let role = res.data.role.toUpperCase();
      setOutput("Success\n\nRole: " + role);
      setIsLoading(false)
    } catch (err: any) {

      let message = err.response.data.message

      console.log(message);
      setIsLoading(false)


      if (Array.isArray(message)) {
        message = message.map((e: any) => { let e2 = e.split(""); e2[0] = e2[0].toUpperCase(); return e2.join("") }).join("\n\n")
      }

      setOutput(message);
      setIsFailed(true);
    }
  }

  return (
    <>
      <div className='flex justify-center p-8 m-2 border-b border-gray-400 shadow'>
        <div className="w-85 border border-gray-300 rounded-xl p-4 shadow-xl">
          <h2 className="text-xl text-center text-purple-700 m-2">Log In</h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 flex-none">
              <div className="pl-1.5 text-gray-600">Email</div>
              <input onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="email" type="email" className="border rounded pl-2 border-gray-400 outline-purple-800"></input>
            </div>
            <div className="p-4 flex-none">
              <div className="pl-1.5 text-gray-600">Password</div>
              <input onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="password" type="password" className="border rounded pl-2 border-gray-400 outline-purple-800"></input>
            </div>
          </div>
          <div className='flex justify-center m-4'>
            <button onClick={() => submitSignInForm()} hidden={isLoading} className="border border-purple-800 bg-purple-500 hover:bg-purple-400 active:bg-purple-300 text-white p-1 w-20 rounded-xl hover:not-active:-translate-y-0.5 duration-20 active:translate-y-0.5 not-active:shadow">Submit</button>
            <div className="p-1 w-20 text-purple-700" hidden={!isLoading}>Loading...</div>
          </div>
        </div>
        <div className={"duration-700 " + (output ? "w-50 opacity-100" : "w-0 opacity-0")}>
          <div className={"w-50 p-4 m-2 ml-12 mr-12 opacity-100 whitespace-pre-line " + (isFailed ? "text-red-800" : "text-green-800")}>{output}</div>
        </div>
      </div >
    </>
  )
}
