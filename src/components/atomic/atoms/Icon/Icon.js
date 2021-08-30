/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { mapIcon } from "./helpers";

const Icon = ({ type }) => (
  <div>
    <img src={mapIcon(type)}></img>
  </div>
);

export default Icon;
