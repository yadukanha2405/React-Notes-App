import { Delete } from "@material-ui/icons";
import "../Note/note.css";
import React from "react";

const Note = ({ element, id, handleDelet, data, time, myKey }) => {
  return (
    <div className="container" key={myKey}>
      <p>{element}</p>
      <div className="child">
        <div>
          <small>{time}</small>
          <small className="data">{data}</small>
        </div>

        <Delete onClick={() => handleDelet(id)} />
      </div>
    </div>
  );
};
export default Note;
