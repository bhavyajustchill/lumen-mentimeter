import React, { memo, useCallback, useEffect } from "react";

const McqFormat = ({ activeSlide, slides, setSlides }) => {
  const formatOptions = [
    { id: "landscape", title: "Landscape" },
    { id: "square", title: "Square" },
    { id: "vertical", title: "Vertical" },
    { id: "story", title: "Story" },
  ];

  // Initialize default format structure if it doesn't exist
  useEffect(() => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      if (!newSlides[activeSlide].format) {
        newSlides[activeSlide].format = { selectedFormat: null };
      } else if (!newSlides[activeSlide].format.selectedFormat) {
        newSlides[activeSlide].format.selectedFormat = null;
      }
      return newSlides;
    });
  }, [activeSlide, setSlides]);

  const handleFormatChange = useCallback(
    (formatId) => {
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[activeSlide].format.selectedFormat = formatId;
        return newSlides;
      });
    },
    [activeSlide, setSlides]
  );

  return (
    <div className="px-2">
      <div className="grid grid-cols-2 gap-4 mt-4">
        {formatOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => handleFormatChange(option.id)}
            className={`relative flex flex-col items-center justify-between border rounded-lg cursor-pointer hover:shadow-lg ${
              slides[activeSlide].format?.selectedFormat === option.id
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            <div className="flex flex-grow justify-center items-center">
              <div className="w-full">
                {/* Format Image with dynamic aspect ratio */}
                <div
                  className={`relative max-h-40 ${
                    option.id === "landscape"
                      ? "aspect-[16/9]" // 16:9 aspect ratio
                      : option.id === "square"
                      ? "aspect-square" // 1:1 aspect ratio
                      : option.id === "vertical"
                      ? "aspect-[9/16]" // 9:16 aspect ratio
                      : "aspect-[9/21]" // Custom aspect ratio for story
                  }`}
                >
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/vancity.jpg"
                    alt={option.title}
                    className="inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              </div>
            </div>
            {/* Format Title */}
            <div className="w-full py-2 bg-gray-100 text-center text-sm font-medium rounded-b-lg">
              {option.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(McqFormat);
