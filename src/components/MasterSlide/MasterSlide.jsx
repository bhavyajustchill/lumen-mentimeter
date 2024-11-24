import React, { useEffect, useMemo, useRef } from "react";
import ContentPages, { admin } from "../SlideComponents/ContentPages";

const MasterSlide = React.forwardRef(({ activeSlide, slides, propertiesWindow }, ref) => {
  const ActiveSlide = ContentPages[slides[activeSlide].content_type][admin];

  const MasterSlideContainer = useRef(null);
  const MASTER_SLIDE_FIXED_WIDTH = 1920;
  const MASTER_SLIDE_FIXED_HEIGHT = 1080;

  const handleMasterSlideResize = () => {
    if (!ref.current) return;

    let heightScale = MasterSlideContainer.current.offsetHeight / MASTER_SLIDE_FIXED_HEIGHT;
    let widthScale = MasterSlideContainer.current.offsetWidth / MASTER_SLIDE_FIXED_WIDTH;

    ref.current.style.scale = Math.min(heightScale, widthScale);
    ref.current.style.left =
      (MasterSlideContainer.current.offsetWidth -
        (MASTER_SLIDE_FIXED_WIDTH * ref.current.style.scale).toFixed(2)) /
        2 +
      "px";
  };

  useEffect(() => {
    handleMasterSlideResize();
    window.addEventListener("resize", handleMasterSlideResize);
    return () => window.removeEventListener("resize", handleMasterSlideResize);
  }, []);

  const MainSlide = () => {
    return (
      <div className="flex-grow w-auto overflow-hidden relative flex">
        <div className="p-3 relative flex-grow">
          {/* Master Slide Container */}
          <div ref={MasterSlideContainer} className="p-3 h-full w-full m-auto relative">
            {/* Master Slide */}
            <div
              ref={ref} // Attach the ref here
              className="absolute w-full h-full transform origin-top-left top-0 left-0">
              <div
                style={{ ...slides[activeSlide]?.style }}
                className="relative h-[1080px] w-[1920px] small-slide-main overflow-hidden">
                <div className="h-full w-full overflow-hidden">
                  <ActiveSlide
                    {...{
                      ...slides[activeSlide].content,
                      id: slides[activeSlide].id,
                      activeSlide,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return useMemo(
    () => (
      <>
        <MainSlide />
      </>
    ),
    [activeSlide]
  );
});

export default MasterSlide;
