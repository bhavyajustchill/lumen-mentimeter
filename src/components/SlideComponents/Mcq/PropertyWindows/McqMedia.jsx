// src/components/McqProperties/McqMedia.js
import React, { memo, useCallback, useState, useEffect } from "react";

// Sample image data for demonstration purposes
const sampleImages = {
  Library: [
    "https://via.placeholder.com/300x200?text=Library+1",
    "https://via.placeholder.com/300x200?text=Library+2",
    "https://via.placeholder.com/300x200?text=Library+3",
    "https://via.placeholder.com/300x200?text=Library+4",
  ],
  GIFs: [
    "https://via.placeholder.com/300x200?text=GIF+1",
    "https://via.placeholder.com/300x200?text=GIF+2",
    "https://via.placeholder.com/300x200?text=GIF+3",
    "https://via.placeholder.com/300x200?text=GIF+4",
  ],
  Upload: [
    "https://via.placeholder.com/300x200?text=Upload+1",
    "https://via.placeholder.com/300x200?text=Upload+2",
    "https://via.placeholder.com/300x200?text=Upload+3",
    "https://via.placeholder.com/300x200?text=Upload+4",
  ],
  Recent: [
    "https://via.placeholder.com/300x200?text=Recent+1",
    "https://via.placeholder.com/300x200?text=Recent+2",
    "https://via.placeholder.com/300x200?text=Recent+3",
    "https://via.placeholder.com/300x200?text=Recent+4",
  ],
};

const McqMedia = ({ activeSlide, slides, setSlides }) => {
  const [activeTab, setActiveTab] = useState("Library");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState(sampleImages[activeTab]);

  useEffect(() => {
    // Filter images based on search query
    if (searchQuery.trim() === "") {
      setFilteredImages(sampleImages[activeTab]);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = sampleImages[activeTab].filter((url) =>
        url.toLowerCase().includes(query)
      );
      setFilteredImages(filtered);
    }
  }, [searchQuery, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchQuery(""); // Reset search on tab change
  };

  const handleImageSelect = (url) => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[activeSlide].media = url;
      newSlides[activeSlide].mediaType = url.includes("video")
        ? "video"
        : "image"; // Simple type determination
      return newSlides;
    });
  };

  const handleMediaChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (upload) => {
          setSlides((prevSlides) => {
            const newSlides = [...prevSlides];
            newSlides[activeSlide].media = upload.target.result;
            newSlides[activeSlide].mediaType = file.type.startsWith("image")
              ? "image"
              : "video";
            return newSlides;
          });
        };
        reader.readAsDataURL(file);
      }
    },
    [activeSlide, setSlides]
  );

  // Function to render images in rows of 2
  const renderImageGrid = () => {
    const rows = [];
    for (let i = 0; i < filteredImages.length; i += 2) {
      const rowImages = filteredImages.slice(i, i + 2);
      rows.push(
        <div key={i} className="grid grid-cols-2 gap-2 mb-2">
          {rowImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Media ${i + index + 1}`}
              className="w-fit cursor-pointer border rounded"
              onClick={() => handleImageSelect(url)}
            />
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="px-2">
      {/* Tab Bar */}
      <div className="mt-3 flex border-b">
        {["Library", "GIFs", "Upload", "Recent"].map((tab) => (
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

      {/* Search Bar */}
      <div className="mt-3">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Image Grid or Upload Section */}
      {activeTab !== "Upload" ? (
        <div className="mt-4 w-full">
          {filteredImages.length > 0 ? (
            renderImageGrid()
          ) : (
            <p className="text-gray-500">No images found.</p>
          )}
        </div>
      ) : (
        <div className="mt-4">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaChange}
            className="mt-2"
          />
          {slides[activeSlide].media && (
            <div className="mt-3">
              {slides[activeSlide].mediaType === "image" ? (
                <img
                  src={slides[activeSlide].media}
                  alt="Slide Media"
                  className="w-full h-auto"
                />
              ) : (
                <video
                  src={slides[activeSlide].media}
                  controls
                  className="w-full h-auto"
                />
              )}
            </div>
          )}
        </div>
      )}

      {/* Display Selected Media */}
      {activeTab !== "Upload" && slides[activeSlide].media && (
        <div className="mt-3">
          {slides[activeSlide].mediaType === "image" ? (
            <img
              src={slides[activeSlide].media}
              alt="Slide Media"
              className="w-full h-auto"
            />
          ) : (
            <video
              src={slides[activeSlide].media}
              controls
              className="w-full h-auto"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default memo(McqMedia);
