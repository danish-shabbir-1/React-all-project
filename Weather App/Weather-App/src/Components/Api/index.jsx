import React from "react";
import { useEffect, useState } from "react";

const FetchApi = () => {

const [data, setData] = useState()

  useEffect(() => {
    GetData()
  }, []);

const GetData = () => {
const api = fetch(`https://api.weatherapi.com/v1/forecast.json?key=91b4369798474fee84b51233233010&q=${location}&days=3&aqi=no`)
.then(res => res.json())
.then(response => setData(response))
.catch((error) => console.error("Error fetching data:", error));
}
console.log(data);

  return <div>
<h1>{Date.location?.country }</h1>
  </div>;
};

export default FetchApi;
