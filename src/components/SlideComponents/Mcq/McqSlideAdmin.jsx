import { useEffect, useState } from "react";

import McqChart from "./McqChart";
import { slides } from "../../../utils/constants";

const McqSlideAdmin = ({ title, options, id, activeSlide }) => {
  return (
    <>
      <div className="">
        <h1 className="text-6xl ms-16 mt-16 mb-10">{title}</h1>

        {/* Render Chart */}
        <McqChart key={id} id={id} activeSlide={activeSlide} />
      </div>
    </>
  );
};

export default McqSlideAdmin;
