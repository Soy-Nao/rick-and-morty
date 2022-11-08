import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LocationItem from "./LocationItem";

const Location = () => {
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
      alert("Ese universo no existe, ingresa un valor entre 1 y 126");
    }
  };

//   console.log(locationList.residents);
  return (
    <div>
      <h1>{locationList.name}</h1>
      <input
        type="text"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      />
      <button onClick={searchType}>Search</button>
      <ul>
        {locationList.residents?.map((index) => (
          // ENVIO LOS DATOS A EL OTRO COMPONENTE
          <LocationItem index={index} key={index} />
        )
        )
        }
        
{        console.log(locationList.residents)
}      </ul>
    </div>
  );
};

export default Location;
