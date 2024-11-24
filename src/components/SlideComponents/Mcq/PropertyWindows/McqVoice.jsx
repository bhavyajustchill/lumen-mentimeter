import React, { useState } from "react";
import TrackItem from "../../../AudioPlayer/TrackItem";

const McqVoice = ({ activeSlide, slides, setSlides }) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [voiceTracks, setVoiceTracks] = useState(slides[activeSlide]?.voiceTracks || []);

  const handleVoiceUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      files.forEach((file) => {
        if (file.type.startsWith("audio/")) {
          const reader = new FileReader();
          reader.onload = (upload) => {
            const audio = new Audio(upload.target.result);
            audio.addEventListener("loadedmetadata", () => {
              const trackData = {
                name: file.name,
                url: upload.target.result,
                duration: `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)
                  .toString()
                  .padStart(2, "0")}`,
              };
              setVoiceTracks((prevTracks) => [...prevTracks, trackData]);
              setSlides((prevSlides) => {
                const newSlides = [...prevSlides];
                newSlides[activeSlide].voiceTracks = [
                  ...(newSlides[activeSlide].voiceTracks || []),
                  trackData,
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
    setPlayingIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const filteredTracks = voiceTracks.filter((track) =>
    track.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-3">
      {/* Upload Button */}
      <div className="flex justify-center items-center my-4">
        <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
          Upload Voice
          <input
            type="file"
            accept="audio/*"
            multiple
            onChange={handleVoiceUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search voice tracks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Voice Tracks */}
      <div className="space-y-4">
        {filteredTracks.map((track, index) => (
          <TrackItem
            key={index}
            track={track}
            index={index}
            isPlaying={playingIndex === index}
            onPlayPause={handlePlayPause}
          />
        ))}
      </div>
    </div>
  );
};

export default McqVoice;
