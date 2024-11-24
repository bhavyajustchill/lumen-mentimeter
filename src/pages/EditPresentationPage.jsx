import React, { useState, useRef } from "react";
import EditHeader from "../components/EditHeader";
import EditHeaderSecondary from "../components/EditHeaderSecondary";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import PropertiesSidebar from "../components/PropertiesSidebar";
import MasterSlide from "../components/MasterSlide";
import { MessageTop } from "../components/MasterSlide/Message";
import { slides as defaultSlides } from "../utils/constants";

const EditPresentation = () => {
  const [propertiesWindow, setPropertiesWindow] = useState("");
  const [slides, setSlides] = useState(defaultSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  const masterSlideRef = useRef(null); // Ref for recording

  return (
    <div className="bg-gray-700 flex justify-center">
      <section
        className="w-full h-full flex flex-col"
        style={{
          background: "#efeff2",
          minHeight: "100vh",
          maxWidth: "144em",
        }}>
        <EditHeader />
        <EditHeaderSecondary />
        <div className="flex flex-grow overflow-hidden" style={{ height: "calc(100vh - 7em)" }}>
          <LeftSidebar slides={slides} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
          <div className="flex flex-col flex-grow">
            <MessageTop masterSlideRef={masterSlideRef} />
            <MasterSlide
              ref={masterSlideRef} // Pass the ref here
              activeSlide={activeSlide}
              slides={slides}
              propertiesWindow={propertiesWindow}
            />
          </div>
          <PropertiesSidebar
            slides={slides}
            setSlides={setSlides}
            activeSlide={activeSlide}
            propertiesWindow={propertiesWindow}
            setPropertiesWindow={setPropertiesWindow}
          />
          <RightSidebar
            propertiesWindow={propertiesWindow}
            setPropertiesWindow={setPropertiesWindow}
          />
        </div>
      </section>
    </div>
  );
};

export default EditPresentation;
