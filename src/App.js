import Notelist from "./components/Notelist/Notelist";
import Search from "./components/Search/Search";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([
    {
      id: nanoid(),
      ele: "Hello Kanhaiya",
      data: "16/16/2022",
      time: "07:50:23"
    }
  ]);

  const [searchText, setSearchText] = useState("");

  const handleText = (txt) => {
    let data = new Date();
    let newText = {
      id: nanoid(),
      text: txt,
      data: data.toLocaleDateString(),
      time: data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
    };
    setList([...list, newText]);
  };
  const handleDelet = (id) => {
    const newText = list.filter((val) => val.id !== id);
    setList(newText);
  };

  return (
    <div className="App">
      <Search setSearchText={setSearchText} />
      <Notelist
        textFun={handleText}
        nodeList={list}
        handleDelet={handleDelet}
        searchText={searchText}
      />
    </div>
  );
}
