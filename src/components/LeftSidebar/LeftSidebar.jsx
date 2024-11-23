import React from "react";
import "./LeftSidebar.css";
import ContentPages, { display } from "../SlideComponents/ContentPages";

const LeftSidebar = ({ activeSlide, setActiveSlide, slides }) => {
  const Slides = () =>
    slides.map((slide, i) => {
      const SlideComponent = ContentPages[slide.content_type][display];
      return (
        <React.Fragment key={slide.id}>
          <input
            type="radio"
            className="small_slides hidden"
            name="small_slides"
            checked={activeSlide === i}
            id={`small_slides_${i}`}
            readOnly={true}
          />
          <label
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.target.click();
              }
            }}
            onClick={() => {
              setActiveSlide(i);
            }}
            htmlFor={`small_slides_${i}`}
            className="flex w-full relative cursor-pointer border-b border-1"
            style={{ aspectRatio: "16/9" }}
          >
            <div
              className="relative flex font-semibold py-2"
              style={{ width: "32px" }}
            >
              <div className="h-full grid" style={{ width: "40%" }}>
                <div className="small_slide_line"></div>
              </div>
              <div className="" style={{ width: "60%", textAlign: "center" }}>
                {i + 1}
              </div>
            </div>

            <div className="relative w-full flex justify-center">
              <div
                className="absolute w-full h-full"
                style={{
                  scale: "0.084",
                  transformOrigin: "top left",
                  top: "13%",
                  left: "4%",
                }}
              >
                <div
                  style={{
                    ...slide?.style,
                    backgroundColor: "#eee",
                    color: "#000",
                    width: 1920,
                    height: 1080,
                  }}
                  className=" relative text-4xl  small-slide-main"
                >
                  <div className="h-full w-full overflow-hidden">
                    {<SlideComponent {...{ ...slide.content, id: slide.id }} />}
                  </div>
                </div>
              </div>
            </div>
          </label>
        </React.Fragment>
      );
    });

  return (
    <>
      <div
        style={{ flexBasis: "14em" }}
        className="overflow-y-scroll scrollbar-style-1 bg-white gap-2 flex flex-col flex-shrink-0 flex-grow-0"
      >
        <ul className="">{<Slides />}</ul>
      </div>
    </>
  );
};

export default LeftSidebar;
