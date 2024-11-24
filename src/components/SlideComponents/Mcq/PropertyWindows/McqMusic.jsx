import React, { useState } from "react";
import TrackItem from "../../../AudioPlayer/TrackItem";

const McqMusic = ({ activeSlide, slides, setSlides }) => {
  const [activeTab, setActiveTab] = useState("Tracks");
  const [playingIndex, setPlayingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadedTracks, setUploadedTracks] = useState(slides[activeSlide]?.uploadedMusic || []);
  const [recentTracks, setRecentTracks] = useState(slides[activeSlide]?.recentMusic || []);

  const predefinedTracks = [
    {
      name: "Relaxing Beats",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      duration: "3:45",
    },
    {
      name: "Upbeat Vibes",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      duration: "4:20",
    },
    {
      name: "Chill Lounge",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      duration: "2:50",
    },
  ];

  const handleMusicUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      files.forEach((file) => {
        if (file.type.startsWith("audio/")) {
          const reader = new FileReader();
          reader.onload = (upload) => {
            const audio = new Audio(upload.target.result);
            audio.addEventListener("loadedmetadata", () => {
              const newTrack = {
                name: file.name,
                url: upload.target.result,
                duration: `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)
                  .toString()
                  .padStart(2, "0")}`,
              };
              setUploadedTracks((prev) => [...prev, newTrack]);
              setSlides((prevSlides) => {
                const newSlides = [...prevSlides];
                newSlides[activeSlide].uploadedMusic = [
                  ...(newSlides[activeSlide].uploadedMusic || []),
                  newTrack,
                ];
                return newSlides;
              });
            });
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };

  const handlePlayPause = (index) => {
    const selectedTrack =
      activeTab === "Tracks"
        ? predefinedTracks[index]
        : activeTab === "Uploads"
        ? uploadedTracks[index]
        : recentTracks[index];

    // Add the track to Recents if it's not already there
    if (activeTab !== "Recent") {
      setRecentTracks((prev) => {
        if (!prev.some((track) => track.url === selectedTrack.url)) {
          return [selectedTrack, ...prev];
        }
        return prev;
      });

      // Update Recents in Slides
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        const recent = newSlides[activeSlide].recentMusic || [];
        if (!recent.some((track) => track.url === selectedTrack.url)) {
          newSlides[activeSlide].recentMusic = [selectedTrack, ...recent];
        }
        return newSlides;
      });
    }

    // Toggle Play/Pause
    setPlayingIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const tracks =
    activeTab === "Tracks"
      ? predefinedTracks
      : activeTab === "Uploads"
      ? uploadedTracks
      : recentTracks;

  const filteredTracks = tracks.filter((track) =>
    track.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-3">
      {/* Tabs */}
      <div className="flex space-x-4 mt-3 border-b">
        {["Tracks", "Uploads", "Recent"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSearchQuery(""); // Reset search query when switching tabs
            }}
            className={`py-2 px-4 focus:outline-none ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mb-4 mt-4">
        <input
          type="text"
          placeholder={`Search ${
            activeTab === "Tracks"
              ? "tracks"
              : activeTab === "Uploads"
              ? "uploaded tracks"
              : "recent tracks"
          }...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Upload Button for Uploads Tab */}
      {activeTab === "Uploads" && (
        <div className="flex justify-center items-center my-4">
          <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
            Upload Tracks
            <input
              type="file"
              accept="audio/*"
              multiple
              onChange={handleMusicUpload}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* Track List */}
      <div className="space-y-4 mt-4">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track, index) => (
            <TrackItem
              key={index}
              track={track}
              index={index}
              isPlaying={playingIndex === index}
              onPlayPause={handlePlayPause}
            />
          ))
        ) : (
          <p className="text-gray-500">No tracks available.</p>
        )}
      </div>
    </div>
  );
};

export default McqMusic;
