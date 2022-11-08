import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./ResidentInfo.css";

const ResidentInfo = ({ index }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(index).then((res) => setCharacter(res.data));
  }, []);

  const type = character.type;
let tatus = ""
  const alive = character.status;
  if (alive === "Alive") {
    tatus ="live";
  } else if (alive === "Dead") {
    tatus= "dead";
  } else {
    tatus= "unknown";
  }

  return (
    <div className="container">
      <li className="card" key={index}>
        <img src={character.image} alt="" className="characterImage" />
        <div>
          <p className="title">{character?.name}</p>
        </div>
        <div className="divider"></div>
        <div>
          <p>
            TYPE <br />
            <b>{type === "" ? "unknown" : character.type}</b>
          </p>
        </div>
        <div>
          STATUS: <b>{character.status}</b>
          <div className={`flicker  ${tatus} `}></div>{" "}
        </div>
        <div>
          <p>
            ORIGIN
            <br />
            <b>{character.origin?.name}</b>
          </p>
        </div>
        <div>
          <p>
            EPISODES WHERE APPEAR <br />
            <b>{character.episode?.length}</b>
          </p>
        </div>
      </li>
    </div>
  );
};

export default ResidentInfo;
