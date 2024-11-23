import React, { useState } from "react";
import EditHeader from "../components/EditHeader";
import EditHeaderSecondary from "./../components/EditHeaderSecondary/";
import LeftSidebar from "./../components/LeftSidebar/";
import RightSidebar from "./../components/RightSidebar/";
import PropertiesSidebar from "./../components/PropertiesSidebar/";
import MasterSlide, { MasterSlideContainer } from "../components/MasterSlide/";
import { MessageBottom, MessageTop } from "../components/MasterSlide/Message";
import { slides as defaultSides } from "../utils/constants";

const EditPresentation = () => {
  const [propertiesWindow, setPropertiesWindow] = useState("");
  const [slides, setSlides] = useState(defaultSides);
  const [activeSlide, setActiveSlide] = useState(0);

  const MasterSlideProps = {
    slides,
    activeSlide,
    propertiesWindow,
  };

  const LeftSidebarProps = {
    slides,
    activeSlide,
    setActiveSlide,
  };

  const RightSidebarProps = {
    propertiesWindow,
    setPropertiesWindow,
  };

  const PropertiesSidebarProps = {
    slides,
    setSlides,
    activeSlide,
    propertiesWindow,
    setPropertiesWindow,
  };

  if (slides.length !== 0)
    return (
      <>
        <div className="bg-gray-700 flex justify-center">
          <section
            className="w-full h-full flex flex-col"
            style={{
              background: "#efeff2",
              minHeight: "100vh",
              maxWidth: "144em",
            }}
          >
            <EditHeader />
            <EditHeaderSecondary />
            <div
              className="flex flex-grow overflow-hidden"
              style={{ height: "calc(100vh - 7em)" }}
            >
              <LeftSidebar {...LeftSidebarProps} />
              <MasterSlideContainer>
                <MessageTop />
                <MasterSlide {...MasterSlideProps} />
                <MessageBottom />
              </MasterSlideContainer>
              <PropertiesSidebar {...PropertiesSidebarProps} />
              <RightSidebar {...RightSidebarProps} />
            </div>
          </section>
        </div>
      </>
    );
};

export default EditPresentation;
