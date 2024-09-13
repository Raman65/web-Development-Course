"use client"
import { submitAction } from "@/action/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  
  return (
    <div className="bg-slate-400 w-2/3 mx-auto my-2 border-2 gap-2">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name= "name" id="name" className="text-black mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="name">Address</label>
          <input name="add" id="add" className="text-black mx-4" type="text" />
        </div>
        <div>
          <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
