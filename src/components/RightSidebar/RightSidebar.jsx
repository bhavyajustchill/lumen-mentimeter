import React from "react";
import {
  MdAudiotrack,
  MdOutlineKeyboardVoice,
  MdAspectRatio,
  MdOutlineEdit,
  MdOutlineLibraryBooks,
  MdOutlineInterests,
  MdOutlineImage,
  MdOutlineStyle,
} from "react-icons/md";

const RightSidebar = ({ propertiesWindow, setPropertiesWindow }) => {
  const buttons = [
    {
      id: "content",
      label: "Content",
      icon: <MdOutlineEdit size="1.7em" />,
    },
    {
      id: "media",
      label: "Media",
      icon: <MdOutlineImage size="1.7em" />,
    },
    {
      id: "icons",
      label: "Icons",
      icon: <MdOutlineInterests size="1.7em" />,
    },
    {
      id: "voice",
      label: "Voice",
      icon: <MdOutlineKeyboardVoice size="1.7em" />,
    },
    {
      id: "music",
      label: "Music",
      icon: <MdAudiotrack size="1.7em" />,
    },
    {
      id: "style",
      label: "Style",
      icon: <MdOutlineStyle size="1.7em" />,
    },
    {
      id: "format",
      label: "Format",
      icon: <MdAspectRatio size="1.7em" />,
    },
    {
      id: "source",
      label: "Source",
      icon: <MdOutlineLibraryBooks size="1.7em" />,
    },
  ];

  // Handler for button clicks
  const handleButtonClick = (id) => {
    if (propertiesWindow === id) {
      setPropertiesWindow(""); // Deselect if already active
    } else {
      setPropertiesWindow(id); // Select the clicked button
    }
  };

  return (
    <div
      className="overflow-y-auto h-auto py-2 bg-white gap-2 flex flex-col border-l border-gray-300"
      style={{ flexBasis: "7.5em" }}
    >
      {/* Dynamically render each property button */}
      {buttons.map((button) => {
        const isActive = propertiesWindow === button.id;

        return (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            className={`mx-2 p-3 flex flex-col justify-center items-center cursor-pointer rounded-lg border-2 transition-colors duration-200
              ${
                isActive
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-white border-transparent text-gray-700 hover:bg-blue-50 hover:border-blue-200"
              }`}
            aria-pressed={isActive}
            aria-label={button.label}
          >
            <span
              className={`mb-1 transition-colors duration-200 ${
                isActive ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {button.icon}
            </span>
            <span className="text-sm">{button.label}</span>
          </button>
        );
      })}

      {/* Divider */}
      {/* <hr className="border-b border-gray-200 w-full my-2" /> */}

      {/* Templates Button (Non-toggle button) */}
      {/* <button
        onClick={() => {
          // Define the action for Templates button if needed
          // For example, open a templates modal or navigate to a templates section
          console.log("Templates button clicked");
        }}
        className="mx-2 p-3 flex flex-col justify-center items-center cursor-pointer rounded-lg border-2 border-transparent hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200"
        aria-label="Templates"
      >
        <HiOutlineTemplate size="1.7em" />
        <span className="text-sm">Templates</span>
      </button> */}
    </div>
  );
};

export default RightSidebar;
