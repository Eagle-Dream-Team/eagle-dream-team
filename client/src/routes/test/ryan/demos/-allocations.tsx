import axios from "axios";
import { useState } from "react";
import { Button } from "../components/-button";
import { OutputPanel } from "../components/-output-panel";
import { TitledBox } from "../components/-titled-box";
import { Tray } from "../components/-tray";

const serverUrl = import.meta.env.VITE_API_URL;

export function Allocations() {

  const [output, setOutput] = useState("");
  const [isFailed, setIsFailed] = useState(false);

  async function getAllocations() {
    setOutput("");

    try {
      const res = await axios.get(serverUrl + "/ryan-test/allocationsGrouped");
      console.log(res);

      setOutput("SUCCESS\n\nAllocations: " + JSON.stringify(res.data));
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

  return (
    <>
      <Tray title="Allocations">
        <TitledBox title="Allocations">
          <Button text={"Get All Allocations"} action={getAllocations} loadingText={"Loading..."} />
        </TitledBox>
        <OutputPanel text={output} color={isFailed ? "red" : "green"} />
      </Tray>
    </>
  )
}
