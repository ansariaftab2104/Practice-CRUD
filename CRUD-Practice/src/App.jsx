import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-600">
      <Navbar />
      <div className="flexCards flex flex-wrap items-center justify-center gap-5 mt-5">
        <Card />
        <Form/>
      </div>
    </div>
  );
};

export default App;
