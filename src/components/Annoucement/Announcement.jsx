import { useState } from "react";
import StatusBar from "../StatusBar/StatusBar";

export default function AnnouncementBar() {
    const [onClose , setOnClose] = useState(false);

function handleOnClose(){
    setOnClose(true);
}
if(onClose) return null;

  return (
    <div className=" bg-black text-white py-2 px-4 text-center text-sm relative">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <a href="#" className="underline font-medium">
          Sign Up Now
        </a>
      </p>
      <button onClick={handleOnClose} className="absolute right-4 top-2 text-white">X</button>


    </div>
  );
}
