import axios from "axios";
import { useState } from "react";
import { OutputPanel } from "../components/-output-panel";
import { Button } from "../components/-button";
import { TitledBox } from "../components/-titled-box";
import { Tray } from "../components/-tray";

const serverUrl = import.meta.env.VITE_API_URL;

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");
  const [isFailed, setIsFailed] = useState(false);

  async function submitSignInForm() {
    const login = {
      email,
      password,
    }

    setOutput("");

    try {
      const res = await axios.post(serverUrl + "/auth/sign-in", login);

      localStorage.setItem("access_token", res.data.access_token)

      setIsFailed(false);
      setOutput(`SUCCESS\n\nRole: ${res.data.role}\n\nBearer token: ${res.data.access_token}`);

      console.log(res);

    } catch (err: any) {
      let message = err.response ? err.response.data.message : err;

      if (Array.isArray(message)) {
        message = message.map((e: any) => { let e2 = e.split(""); e2[0] = e2[0].toUpperCase(); return e2.join("") }).join("\n\n")
      }

      message = "ERROR\n\n" + message
      setOutput(message);
      setIsFailed(true);

      console.log(message);
    }
  }

  return (
    <>
      <Tray title="Log In">
        <TitledBox title="Log In">
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
          <Button text="Log In" action={submitSignInForm} loadingText="Loading..." />
        </TitledBox>

        <OutputPanel text={output} color={isFailed ? "red" : "green"} />
      </Tray>
    </>
  )
}
