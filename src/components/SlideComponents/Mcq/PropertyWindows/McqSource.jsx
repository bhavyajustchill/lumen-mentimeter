import React, { memo, useCallback, useEffect } from "react";
import Input from "../../../Input/Input";

const McqSource = ({ activeSlide, slides, setSlides }) => {
  // Default source text
  const defaultSource = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id neque tempus ex fermentum maximus. Etiam quis aliquet dui, a efficitur justo. Nullam interdum mauris nisl, sed dapibus arcu lobortis scelerisque. Nunc eu vulputate felis. Sed ultrices condimentum nisi a euismod. Ut sed eleifend massa. Nulla facilisi. Praesent ultricies massa sit amet ipsum consequat sodales. Nulla a augue vehicula, fermentum purus eget, laoreet turpis. Nullam fermentum nisl est, sed lobortis diam pharetra et. Nulla dui ante, egestas eget est eget, accumsan fringilla urna.

Praesent gravida at turpis id bibendum. Duis luctus sem est, in mattis lacus ultrices quis. Integer suscipit ante velit, vitae pretium est laoreet nec. Nulla facilisi. Sed nec gravida sapien. Vestibulum quis nunc sit amet enim commodo tincidunt quis ut orci. Etiam tincidunt felis sed est pulvinar, at porta metus blandit.

Sed efficitur efficitur porttitor. Suspendisse consectetur consectetur magna gravida feugiat. Ut rhoncus eros vel diam auctor, ac elementum turpis rhoncus. Proin eu imperdiet lectus. Vestibulum eget bibendum ante. Morbi interdum lorem vitae est sagittis, at auctor nisi maximus. Duis sit amet velit viverra, convallis neque sit amet, imperdiet lectus. Maecenas lobortis augue purus, sit amet aliquam ex faucibus sit amet. Fusce dui urna, porttitor ac sapien ut, venenatis rhoncus justo. Duis ut lorem ut neque maximus suscipit vel nec est. Cras nec mattis sapien, ac hendrerit erat. Donec id congue est, eu venenatis sem. Mauris nec erat interdum, rhoncus orci vel, tristique ex. Phasellus volutpat finibus velit, sit amet commodo neque condimentum vulputate. Quisque placerat lorem eu porttitor ultrices. Ut posuere pulvinar diam, ut sagittis mauris dignissim a.

Nulla fringilla eu tellus nec venenatis. In eleifend sagittis vulputate. Praesent dapibus erat sem, vitae gravida libero interdum sed. Ut vel elementum massa. Duis pharetra magna nisl, ac ultrices augue iaculis eu. Morbi gravida justo sed pellentesque varius. Nullam eleifend purus vitae nisl elementum dignissim. Pellentesque pretium risus a diam posuere, et faucibus mi dapibus. Praesent nec dolor placerat, mollis est quis, cursus purus. Pellentesque dapibus laoreet dui et ultrices.

Quisque et leo sed mi ornare pulvinar. Maecenas lacus lacus, aliquet dignissim pharetra sit amet, convallis eu turpis. Aenean in placerat ante. Sed quis ligula interdum, interdum lectus fringilla, ullamcorper mi. Nam eu ante ut lorem ornare rhoncus non nec odio. Vivamus quis dolor sapien. Vivamus congue metus eu blandit finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi at tellus at lectus luctus tempor id at enim. Suspendisse mattis sollicitudin ultricies. Integer pellentesque libero eros, ut dictum metus pharetra vitae.`;

  // Initialize the source value if it's undefined
  useEffect(() => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      if (!newSlides[activeSlide].source) {
        newSlides[activeSlide].source = defaultSource;
      }
      return newSlides;
    });
  }, [activeSlide, setSlides, defaultSource]);

  const handleSourceChange = useCallback(
    (e) => {
      const source = e.target.value;
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[activeSlide].source = source;
        return newSlides;
      });
    },
    [activeSlide, setSlides]
  );

  return (
    <div className="px-3 mt-3">
      <h6 className="text-md font-semibold">Source</h6>
      <Input
        type="text"
        placeholder="Enter source or reference"
        value={slides[activeSlide].source || ""}
        onChange={handleSourceChange}
        className="mt-2"
      />
      {/* Display Source Below Input */}
      <p className="mt-2 text-sm text-gray-600">
        {slides[activeSlide].source || defaultSource}
      </p>
    </div>
  );
};

export default memo(McqSource);
