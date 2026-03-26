import axios from "axios";
import { useState } from "react";
import { Button } from "../components/-button";
import { OutputPanel } from "../components/-output-panel";

const serverUrl = import.meta.env.VITE_API_URL;

export function MyAccount() {

  const [output, setOutput] = useState("");
  const [isFailed, setIsFailed] = useState(false);

  async function submitGetMyAccount() {
    setIsFailed(false);
    setOutput("");

    try {
      const res = await axios.get(serverUrl + "/user/me");
      console.log(res);
      let role = res.data.role.toUpperCase();
      setOutput("Success\n\nRole: " + role);
    } catch (err: any) {

      let message = err.response.data.message

      console.log(message);


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
          <h2 className="text-xl text-center text-purple-700 m-2">MyAccount</h2>
          <Button text={"Get My Info"} action={submitGetMyAccount} loadingText={"Loading..."} />
        </div>
          <OutputPanel text={output} color={isFailed ? "red" : "gray"} />
      </div >
    </>
  )
}
