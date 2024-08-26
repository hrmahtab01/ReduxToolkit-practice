import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import About from "./About";
import { UserDatainfo } from "./Slices/UserSlice";

const App = () => {
  let dispatch = useDispatch();

  let [Todo, Settodo] = useState("");
  let [time, settime] = useState("");

  let handleItemsAdd = () => {
    dispatch(UserDatainfo(Todo));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[200px] gap-5 ">
      <input
        onChange={(e) => Settodo(e.target.value)}
        className="w-[800px] h-[60px] border border-teal-500 rounded-md text-2xl font-semibold"
        type="text"
      />
      <button
        onClick={handleItemsAdd}
        className="py-4 px-[200px] bg-teal-500 rounded-md text-3xl font-semibold"
      >
        Add
      </button>
      <About />
    </div>
  );
};

export default App;
