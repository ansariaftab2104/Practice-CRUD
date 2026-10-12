import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full min-h-screen bg-zinc-600">
      <Navbar setToggle={setToggle} toggle={toggle} />
      {toggle ? (
        <div className="flexCards flex flex-wrap items-center justify-center gap-5 mt-5">
          <Card />
        </div>
      ) : (
        <Form />
      )}
    </div>
  );
};

export default App;
