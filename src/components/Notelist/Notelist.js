import React from "react";
import Input from "../Input/Input";
import Note from "../Note/Note";
import "../Notelist/notelist.css";

const Notelist = ({ textFun, nodeList, handleDelet, searchText }) => {
  return (
    <div className="main">
      <div className="notelist-container">
        {nodeList
          .slice(1)
          .filter((val) => {
            if (searchText == "") {
              return val;
            } else {
              return val.text.toLowerCase().includes(searchText.toLowerCase());
            }
          })

          .map((list, inx) => (
            <Note
              element={list.text}
              myKey={inx}
              id={list.id}
              data={list.data}
              time={list.time}
              handleDelet={handleDelet}
            />
          ))}

        <Input textFun={textFun} />
      </div>
    </div>
  );
};

export default Notelist;
