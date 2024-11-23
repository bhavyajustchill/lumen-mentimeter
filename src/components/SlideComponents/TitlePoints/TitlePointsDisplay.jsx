import { AiOutlineUnorderedList } from "react-icons/ai";

const TitlePointsDisplay = ({ title }) => {
  return (
    <>
      <div className="ml-4 flex flex-col">
        <h1 className="text-9xl my-24">{title?.data}</h1>

        <AiOutlineUnorderedList className="w-2/5 h-auto mx-auto text-gray-500" />
      </div>
    </>
  );
};

export default TitlePointsDisplay;
