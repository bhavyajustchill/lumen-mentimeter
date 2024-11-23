import React, { memo, useCallback, useState } from "react";

const McqStyle = ({ activeSlide, slides, setSlides }) => {
  const [watermarkEnabled, setWatermarkEnabled] = useState(false);
  const [sceneTransitionsEnabled, setSceneTransitionsEnabled] = useState(false);

  const fontFamilies = [
    "Roboto Medium",
    "Open Sans Light",
    "Arial",
    "Helvetica",
    "Times New Roman",
  ];

  const colorPalettes = [
    {
      id: "default",
      name: "Default",
      colors: ["#EFEFEF", "#E5E5E5", "#BDBDBD", "#000000"],
    },
    {
      id: "emerald",
      name: "Emerald",
      colors: ["#EFEFEF", "#E5F5E5", "#B2E5D5", "#000000"],
    },
    {
      id: "cybergrape",
      name: "Cyber Grape",
      colors: ["#EFEFEF", "#E5E5F5", "#C2C5E5", "#000000"],
    },
    {
      id: "ocean",
      name: "Ocean",
      colors: ["#EFEFEF", "#E5F5FF", "#B2D8E5", "#000000"],
    },
    {
      id: "tangerine",
      name: "Tangerine",
      colors: ["#EFEFEF", "#FFE5D5", "#FFC07D", "#000000"],
    },
  ];

  const handleWatermarkUpload = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (upload) => {
          setSlides((prevSlides) => {
            const newSlides = [...prevSlides];
            newSlides[activeSlide].style.watermark = upload.target.result;
            return newSlides;
          });
        };
        reader.readAsDataURL(file);
      }
    },
    [activeSlide, setSlides]
  );

  const handleFontChange = useCallback(
    (fontType, value) => {
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[activeSlide].style[fontType] = value;
        return newSlides;
      });
    },
    [activeSlide, setSlides]
  );

  const handlePaletteSelection = (paletteId) => {
    const selectedPalette = colorPalettes.find(
      (palette) => palette.id === paletteId
    );
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[activeSlide].style.selectedPalette = paletteId;
      newSlides[activeSlide].style.primaryColor = selectedPalette.colors[1];
      newSlides[activeSlide].style.secondaryColor = selectedPalette.colors[2];
      return newSlides;
    });
  };

  return (
    <div className="px-3 my-3 space-y-6">
      {/* Watermark Section */}
      <div>
        <h6 className="text-md font-semibold flex justify-between items-center">
          Watermark
          <div
            className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-all ${
              watermarkEnabled ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => setWatermarkEnabled(!watermarkEnabled)}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                watermarkEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </div>
        </h6>
        <p className="text-sm text-gray-600">
          {watermarkEnabled ? "Watermark enabled" : "Watermark disabled"}
        </p>
        {watermarkEnabled && (
          <div className="mt-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleWatermarkUpload}
              className="form-input"
            />
            {slides[activeSlide].style.watermark && (
              <div className="mt-2">
                <img
                  src={slides[activeSlide].style.watermark}
                  alt="Watermark Preview"
                  className="w-full max-w-sm rounded"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Appearance Section */}
      <div>
        <h6 className="text-md font-semibold">Appearance</h6>

        {/* Current Colors */}
        <div className="mt-3">
          <h6 className="text-sm font-semibold mb-1">Current Colors</h6>
          <div className="flex">
            {slides[activeSlide].style.selectedPalette
              ? colorPalettes
                  .find(
                    (p) => p.id === slides[activeSlide].style.selectedPalette
                  )
                  .colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-full h-6"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))
              : colorPalettes[0].colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-full h-6"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
          </div>
        </div>
      </div>

      {/* Palettes Section */}
      <div>
        <h6 className="text-sm font-semibold">Palettes</h6>
        <div className="grid grid-cols-1 gap-4 mt-3">
          {colorPalettes.map((palette) => (
            <div
              key={palette.id}
              className={`border ${
                slides[activeSlide].style.selectedPalette === palette.id
                  ? "border-blue-500"
                  : "border-gray-300"
              } rounded p-2 cursor-pointer`}
              onClick={() => handlePaletteSelection(palette.id)}
            >
              <h6 className="text-xs text-gray-700 text-center mb-2">
                {palette.name}
              </h6>
              <div className="flex">
                {palette.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-full h-6"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Selection */}
      <div>
        <h6 className="text-sm font-semibold">Fonts</h6>
        <label className="flex justify-between items-center mt-2">
          Primary
          <select
            value={slides[activeSlide].style.primaryFont || fontFamilies[0]}
            onChange={(e) => handleFontChange("primaryFont", e.target.value)}
            className="form-select w-1/2"
          >
            {fontFamilies.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>
        <label className="flex justify-between items-center mt-2">
          Secondary
          <select
            value={slides[activeSlide].style.secondaryFont || fontFamilies[1]}
            onChange={(e) => handleFontChange("secondaryFont", e.target.value)}
            className="form-select w-1/2"
          >
            {fontFamilies.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Scene Transitions */}
      <div className="flex justify-between items-center mb-5">
        <h6 className="text-sm font-semibold mb-5">Scene Transitions</h6>
        <div
          className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-all  mb-5 ${
            sceneTransitionsEnabled ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={() => setSceneTransitionsEnabled(!sceneTransitionsEnabled)}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
              sceneTransitionsEnabled ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default memo(McqStyle);
