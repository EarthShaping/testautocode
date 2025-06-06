import React from "react";

const WeatherComponent = (props: { city: string }) => {
    return (<div>Weather for {props.city}</div>);
  };
  
  export default {
    weather: WeatherComponent,
  };