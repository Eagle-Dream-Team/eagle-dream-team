import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/test/")({
  component: RouteComponent,
});

function RouteComponent() {
  var [number, setNumber] = useState(1);
  var [on, setOn] = useState(false);

  return (
    <div className="p-8">
      <p>Hello number is {number}!</p>
      <button
        className=" p-2 border  border-gray-300 hover:bg-gray-100 rounded-2xl"
        onClick={() => setNumber(number + 1)}
      >
        Increment
      </button>
      <button
        className=" p-2 border  border-gray-300 hover:bg-gray-100 rounded-2xl ml-4"
        onClick={() => setOn(!on)}
      >
        Toggle {on ? "ON" : "OFF"}
      </button>
    </div>
  );
}
