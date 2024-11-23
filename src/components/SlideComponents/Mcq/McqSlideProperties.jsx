// src/components/McqProperties/McqProperties.js
import React, { memo, useMemo } from "react";
import McqContent from "./PropertyWindows/McqContent";
import McqMedia from "./PropertyWindows/McqMedia";
import McqIcons from "./PropertyWindows/McqIcons";
import McqVoice from "./PropertyWindows/McqVoice";
import McqMusic from "./PropertyWindows/McqMusic";
import McqStyle from "./PropertyWindows/McqStyle";
import McqFormat from "./PropertyWindows/McqFormat";
import McqSource from "./PropertyWindows/McqSource";

const McqProperties = ({
  propertiesWindow,
  activeSlide,
  slides,
  setSlides,
}) => {
  const propertyComponents = useMemo(() => {
    const componentsMap = {
      content: (
        <McqContent
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
      media: (
        <McqMedia
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
      icons: (
        <McqIcons
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
      voice: (
        <McqVoice
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
      music: (
        <McqMusic
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
      style: (
        <McqStyle
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
      format: (
        <McqFormat
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
      source: (
        <McqSource
          activeSlide={activeSlide}
          slides={slides}
          setSlides={setSlides}
        />
      ),
    };
    return componentsMap;
  }, [propertiesWindow, activeSlide, slides, setSlides]);

  return (
    <div className="w-full h-full">
      {propertyComponents[propertiesWindow] || (
        <div className="p-4">Select a property to edit.</div>
      )}
    </div>
  );
};

export default memo(McqProperties);
