import axios from "axios";
import { useState } from "react";
import { Button } from "../components/-button";
import { OutputPanel } from "../components/-output-panel";
import { TitledBox } from "../components/-titled-box";
import { Tray } from "../components/-tray";

const serverUrl = import.meta.env.VITE_API_URL;

export function MyAccount() {

  const [output, setOutput] = useState("");
  const [isFailed, setIsFailed] = useState(false);

  async function submitGetMyAccount() {
    setOutput("");

    try {
      const res = await axios.get(serverUrl + "/user/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
      });
      console.log(res);

      let user = res.data;
      setOutput(`SUCCESS\n\nName: ${user.first_name} ${user.last_name}\nEmail: ${user.email}\nRole: ${user.role}`);
      setIsFailed(false);

    } catch (err: any) {
      let message = err.response ? err.response.data.message : err;
      console.log(err);
      if (Array.isArray(message)) {
        message = message.map((e: any) => { let e2 = e.split(""); e2[0] = e2[0].toUpperCase(); return e2.join("") }).join("\n\n")
      }
      message = "ERROR\n\n" + message
      setOutput(message);
      setIsFailed(true);
    }
  }

  
  function submitLogOut() {
    setOutput("");
    if (localStorage.getItem("access_token")) {
      localStorage.removeItem("access_token")

      setOutput(`SUCCESS\n\nSigned out`);
      setIsFailed(false);
    } else {
      setOutput("ERROR\n\nNot signed in");
      setIsFailed(true);
    }
  }

  return (
    <>
      <Tray title="My Account">
        <TitledBox title="My Account">
          <Button text={"Get My Info"} action={submitGetMyAccount} loadingText={"Loading..."} />
          <Button text={"Log Out"} action={submitLogOut} loadingText={"Loading..."} />
        </TitledBox >
        <OutputPanel text={output} color={isFailed ? "red" : "green"} />
      </Tray>
    </>
  )
}
