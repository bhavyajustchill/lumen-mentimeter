import { AiOutlineBarChart } from "react-icons/ai";

const McqSlideDisplay = ({ title }) => {
  return (
    <div className="ml-4 flex flex-col">
      <h1 className="text-9xl my-24">
        {/* Limit title length */}
        {title?.data?.length > 45
          ? title?.data?.slice(0, 45) + "..."
          : title?.data}
      </h1>

      <AiOutlineBarChart className="w-1/3 h-auto mx-auto text-gray-500" />
    </div>
  );
};

export default McqSlideDisplay;
