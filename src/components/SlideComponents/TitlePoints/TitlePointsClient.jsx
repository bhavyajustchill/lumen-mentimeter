import { BsDot } from "react-icons/bs";

const TitlePointsClient = ({ title, points }) => {
  return (
    <div className="px-3">
      <h1 className="text-4xl ">{title?.data}</h1>

      <ul className="mt-16 text-2xl flex flex-col gap-4">
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
  );
};

export default TitlePointsClient;
