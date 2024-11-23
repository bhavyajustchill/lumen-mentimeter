import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";

const TrackItem = ({ track, index, isPlaying, onPlayPause }) => {
  const waveformRef = useRef(null);
  const [waveform, setWaveform] = useState(null);

  useEffect(() => {
    // Initialize WaveSurfer
    const wave = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#d9d9d9",
      progressColor: "#007bff",
      cursorColor: "transparent",
      height: 50,
      barWidth: 2,
      barRadius: 2,
      responsive: true,
    });

    wave.load(track.url);
    setWaveform(wave);

    return () => {
      // Destroy WaveSurfer instance
      wave.destroy();
    };
  }, [track.url]);

  useEffect(() => {
    if (waveform) {
      if (isPlaying) {
        waveform.play();
      } else {
        waveform.pause();
      }
    }
  }, [isPlaying, waveform]);

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded shadow-md">
      {/* Play/Pause Button */}
      <button
        onClick={() => onPlayPause(index)}
        className={`w-10 h-10 ${
          isPlaying ? "bg-blue-500" : "bg-blue-300"
        } rounded-full flex items-center justify-center text-white focus:outline-none hover:bg-blue-500`}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Audio Name and Metadata */}
      <div className="flex-1 mx-4 min-w-0">
        <p
          className="text-sm font-medium text-gray-800 truncate"
          title={track.name} // Tooltip for full name
        >
          {track.name}
        </p>
        {track.metadata && (
          <p className="text-xs text-gray-500">{track.metadata}</p>
        )}
      </div>

      {/* Waveform Container */}
      <div className="flex-1">
        <div ref={waveformRef} className="w-full h-12"></div>
      </div>

      {/* Duration */}
      <div className="ml-4">
        <span className="text-sm text-gray-600">{track.duration}</span>
      </div>
    </div>
  );
};

export default TrackItem;
