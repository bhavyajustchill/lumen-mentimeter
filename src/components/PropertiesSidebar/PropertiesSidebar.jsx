import { AiOutlineClose } from "react-icons/ai";
import ContentPages, { properties } from "./../SlideComponents/ContentPages";

const PropertiesSidebar = ({
  propertiesWindow,
  setPropertiesWindow,
  activeSlide,
  slides,
  setSlides,
}) => {
  const ActiveContentProperties = ContentPages["mcq"][properties];
  const ActiveContentPropertiesComponent = (
    <ActiveContentProperties
      propertiesWindow={propertiesWindow}
      activeSlide={activeSlide}
      slides={slides}
      setSlides={setSlides}
    />
  );

  return (
    <>
      <div
        className="overflow-y-auto h-auto my-3 me-3 bg-white border border-gray-300 rounded-lg flex flex-col"
        style={{
          flexBasis: "20.5em",
          display: propertiesWindow ? "flex" : "none",
        }}>
        <div className="flex justify-between items-center px-4 capitalize h-12">
          {propertiesWindow}
          <button
            className="h-auto p-1 btn btn-white"
            onClick={() => {
              setPropertiesWindow("");
            }}>
            <AiOutlineClose
              size="1.8em"
              className="bg-gray-200 hover:bg-gray-300 transition-all duration-200 p-1 rounded-md text-gray-600"
            />
          </button>
        </div>

        <div className="border-b border-gray-300 w-full"></div>

        <div className="overflow-y-auto flex-grow">{ActiveContentPropertiesComponent}</div>
      </div>
    </>
  );
};

export default PropertiesSidebar;
