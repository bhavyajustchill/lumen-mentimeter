// src/components/McqProperties/McqIcons.js
import React, { memo, useCallback, useState, useEffect } from "react";

// Sample icon data for demonstration purposes (using placeholder images)
const sampleIcons = {
  Library: [
    "https://via.placeholder.com/100?text=Smile",
    "https://via.placeholder.com/100?text=Heart",
    "https://via.placeholder.com/100?text=Star",
    "https://via.placeholder.com/100?text=Thumbs+Up",
    "https://via.placeholder.com/100?text=Fire",
    "https://via.placeholder.com/100?text=Lightning",
  ],
  Recent: [
    "https://via.placeholder.com/100?text=Recent+1",
    "https://via.placeholder.com/100?text=Recent+2",
    "https://via.placeholder.com/100?text=Recent+3",
    "https://via.placeholder.com/100?text=Recent+4",
    "https://via.placeholder.com/100?text=Recent+5",
    "https://via.placeholder.com/100?text=Recent+6",
  ],
};

const McqIcons = ({ activeSlide, slides, setSlides }) => {
  const [activeTab, setActiveTab] = useState("Library");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIcons, setFilteredIcons] = useState(sampleIcons["Library"]);
  const [recentIcons, setRecentIcons] = useState(sampleIcons["Recent"]);

  useEffect(() => {
    // Determine which icons to filter based on the active tab
    let iconsToFilter = [];
    if (activeTab === "Library") {
      iconsToFilter = sampleIcons["Library"];
    } else if (activeTab === "Recent") {
      iconsToFilter = recentIcons;
    }

    // Filter icons based on search query
    if (searchQuery.trim() === "") {
      setFilteredIcons(iconsToFilter);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = iconsToFilter.filter((url) =>
        url.toLowerCase().includes(query)
      );
      setFilteredIcons(filtered);
    }
  }, [searchQuery, activeTab, recentIcons]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchQuery(""); // Reset search on tab change
  };

  const handleIconSelect = (url) => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[activeSlide].icons = url;
      return newSlides;
    });

    // Update Recent icons if not already present
    setRecentIcons((prevRecent) => {
      if (!prevRecent.includes(url)) {
        return [url, ...prevRecent].slice(0, 6); // Keep only the latest 6
      }
      return prevRecent;
    });
  };

  const handleIconUpload = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (upload) => {
          const uploadedIcon = upload.target.result;
          setRecentIcons((prevRecent) =>
            [uploadedIcon, ...prevRecent].slice(0, 6)
          );

          // Optionally, set the uploaded icon as the selected icon
          setSlides((prevSlides) => {
            const newSlides = [...prevSlides];
            newSlides[activeSlide].icons = uploadedIcon;
            return newSlides;
          });
        };
        reader.readAsDataURL(file);
      }
    },
    [activeSlide, setSlides]
  );

  // Function to render icons in a grid of 3 per row
  const renderIconGrid = () => {
    return (
      <div className="grid grid-cols-3 gap-2 mt-4">
        {filteredIcons.length > 0 ? (
          filteredIcons.map((url, index) => (
            <div
              key={index}
              className="w-full aspect-square bg-gray-200 flex items-center justify-center rounded cursor-pointer hover:bg-gray-300"
              onClick={() => handleIconSelect(url)}
            >
              <img
                src={url}
                alt={`Icon ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No icons found.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="px-3 ">
      {/* Tab Bar */}
      <div className="mt-3 flex space-x-4 border-b">
        {["Library", "Uploads", "Recent"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`py-2 px-4 focus:outline-none ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Bar (hidden in Uploads tab) */}
      {activeTab !== "Uploads" && (
        <div className="mt-3">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      )}

      {/* Content based on active tab */}
      <div className="mt-4">
        {activeTab === "Library" || activeTab === "Recent" ? (
          renderIconGrid()
        ) : activeTab === "Uploads" ? (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleIconUpload}
              className="mb-4"
            />
            {recentIcons.length > 0 && (
              <>
                <h6 className="text-md font-semibold">Recent Icons</h6>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {recentIcons.map((url, index) => (
                    <div
                      key={index}
                      className="w-full aspect-square bg-gray-200 flex items-center justify-center rounded cursor-pointer hover:bg-gray-300"
                      onClick={() => handleIconSelect(url)}
                    >
                      <img
                        src={url}
                        alt={`Recent Icon ${index + 1}`}
                        className="max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>

      {/* Display Selected Icon */}
      {slides[activeSlide].icons && activeTab !== "Uploads" && (
        <div className="mt-4">
          <h6 className="text-md font-semibold">Selected Icon</h6>
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded mt-2">
            <img
              src={slides[activeSlide].icons}
              alt="Selected Icon"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(McqIcons);
