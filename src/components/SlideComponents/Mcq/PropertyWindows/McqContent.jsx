// src/components/McqProperties/McqContent.js
import React, { memo, useCallback } from "react";
import Input from "../../../Input/Input";
import { AiOutlineClose } from "react-icons/ai";

const McqContent = ({ activeSlide, slides, setSlides }) => {
  const handleTitleChange = useCallback(
    (e) => {
      const newTitle = e.target.value;
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[activeSlide].content.title.data = newTitle;
        return newSlides;
      });
    },
    [activeSlide, setSlides]
  );

  const handleOptionChange = useCallback(
    (index, value) => {
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[activeSlide].content.options.data[index].text = value;
        return newSlides;
      });
    },
    [activeSlide, setSlides]
  );

  const handleRemoveOption = useCallback(
    (index) => {
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[activeSlide].content.options.data.splice(index, 1);
        newSlides[activeSlide].content.id = Math.random() * 9999;
        return newSlides;
      });
    },
    [activeSlide, setSlides]
  );

  const handleAddOption = useCallback(() => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[activeSlide].content.options.data.push({
        id: Math.random() * 9999,
        text: "",
      });
      newSlides[activeSlide].content.id = Math.random() * 9999;
      return newSlides;
    });
  }, [activeSlide, setSlides]);

  return (
    <div className="relative h-full flex flex-col">
      <div className="relative d-flex px-3 overflow-auto flex-col gap-2 w-full h-full scrollbar-style-1">
        {/* Question Title */}
        <div className="w-full mt-3">
          <h6 className="text-md font-semibold">Question</h6>
          <Input
            key={slides[activeSlide].id}
            className="text-md"
            placeholder="Title"
            defaultValue={slides[activeSlide]?.content?.title?.data}
            onChange={handleTitleChange}
          />
        </div>

        {/* Options */}
        <div className="w-full mt-3">
          <h6 className="text-md font-semibold">Options</h6>
          <ul
            key={slides[activeSlide]?.id || 1}
            className="list-none flex flex-col gap-2"
          >
            {slides[activeSlide]?.content?.options?.data?.map(
              (option, index) => (
                <li className="flex items-center" key={option.id}>
                  <Input
                    className="form-input flex-1"
                    placeholder={`Option ${index + 1}`}
                    defaultValue={option.text}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                  <button
                    className="btn btn-link p-0 ml-2"
                    onClick={() => handleRemoveOption(index)}
                  >
                    <AiOutlineClose className="w-6 h-6 text-red-500" />
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Add Option Button */}
      <div className="mt-auto p-3 w-full">
        <button
          className="border rounded-md p-2 border-blue-500 w-full"
          onClick={handleAddOption}
        >
          Add Option
        </button>
      </div>
    </div>
  );
};

export default memo(McqContent);
