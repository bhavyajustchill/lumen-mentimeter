import { useEffect, useState } from "react";

import McqChart from "./McqChart";
import { slides } from "../../../utils/constants";

const McqSlideAdmin = ({ title, options, id, activeSlide }) => {
  const [result, setResult] = useState(slides[activeSlide].userResult || []);

  return (
    <>
      <div className="">
        {/* Todo : length of the title */}
        <h1 className="text-6xl ms-16 mt-16 mb-10">{title?.data}</h1>

        {/* Graph */}
        <McqChart key={id} data={result} id={id} />

        {/* Below code shows the count */}
        {/* <ul style={{ fontSize: "calc(1vw + 1em)", marginLeft: "1em" }} className="list-unstyled">
          {
            options?.data?.map((option) =>
              (option !== "") &&
              <>
                <li key={option.id} >
                  <label className="form-check-label d-flex align-items-center gap-4">
                    {option.text} : {result[id] && result[id][option.id] ? result[id][option.id] : 0}
                  </label>
                </li>
              </>
            )
          }
        </ul> */}
      </div>
    </>
  );
};

export default McqSlideAdmin;
