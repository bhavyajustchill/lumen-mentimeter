import { BsDot } from "react-icons/bs";

const TitlePointsAdmin = ({ title, points }) => {
  return (
    <>
      <div className="">
        <h1 className="text-9xl ms-16 mt-16 flex flex-col gap-4">
          {title?.data}
        </h1>

        <ul className="ps-16 mt-16">
          {points?.data?.map(
            (point) =>
              point !== "" && (
                <li key={point} className="flex items-center gap-8">
                  <BsDot className="inline-block" size="0.6em" /> {point}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default TitlePointsAdmin;
