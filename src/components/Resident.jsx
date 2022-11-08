import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";
import "./Resident.css";

const Resident = () => {
  const [locationList, setLocationList] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const ramdonId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdonId}`)
      .then((res) => setLocationList(res.data));
  }, []);
  const searchType = () => {
    if (typeId > 0 && typeId < 127) {
      axios
        .get(`https://rickandmortyapi.com/api/location/${typeId}`)
        .then((res) => setLocationList(res.data));
    } else {
      alert("Universe not found, enter a value between 1 and 126");
    }
  };
  //ACTIVAR EL ENTER PARA EL INPUT
  const handleKeyDown = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      event.preventDefault();
      searchType();
    }
  };

  return (
    <div>
      <div className="header">
        <div className="headerSearch">
          <div className="search">
            <input
              className="input"
              placeholder="Type the name of the location"
              type="text"
              value={typeId}
              onChange={(e) => setTypeId(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <br />
            <button className="btnSearch" onClick={searchType}>
              Search
            </button>
          </div>
        </div>
        <div className="inf">
          <div>
            <b>Name</b>
            <br />
            {locationList.name}
          </div>
          <div>
            <b>Type</b> <br />
            {locationList.type}
          </div>
          <div>
            <b>Dimension</b>
            <br /> {locationList.dimension}
          </div>
          <div>
            <b>Population</b> <br />
            {locationList.residents?.length}
          </div>
        </div>
      </div>

      <ul className="resident">
        {locationList.residents?.map((index) => (
          // ENVIO LOS DATOS A EL OTRO COMPONENTE
          <ResidentInfo index={index} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Resident;
