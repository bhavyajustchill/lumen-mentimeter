import { AiOutlineAppstore, AiOutlineEdit } from "react-icons/ai";
import Modal from "../ModelView/Modal";
import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { MdDashboard, MdTimer } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdShuffle } from "react-icons/io";
import html2canvas from "html2canvas";

const ResetModel = ({ resetResult, id }) => {
  const title = "Result data reset";
  const body = "Are you sure you want to reset the result data?";
  const footer = [
    { text: "cancel", action: "dismiss" },
    {
      text: "Reset Data",
      action: "function",
      function: resetResult,
      type: "danger",
    },
  ];
  return (
    <>
      <Modal {...{ id, title, body, footer }} />
    </>
  );
};

// const MessageTop = () => {
//   const resetData = "ResetModal";
//   const [timer, setTimer] = useState(5); // Initial timer value in seconds

//   // Increment and decrement timer with 0.5s steps
//   const handleIncrement = () => setTimer((prev) => Math.min(prev + 0.5, 60)); // Optional max value of 60
//   const handleDecrement = () => setTimer((prev) => Math.max(prev - 0.5, 0)); // Optional min value of 0

//   return (
//     <>
//       <div className="flex items-center space-x-4 bg-blue-50 rounded-lg border border-blue-500 p-3">
//         {/* Preview Button */}
//         <button className="bg-blue-100 rounded px-3 py-2 hover:bg-blue-200 flex items-center space-x-2">
//           <FaPlay />
//           <span>Preview</span>
//         </button>
//         <div className="flex flex-row items-center space-x-2 bg-blue-100 rounded justify-around py-1">
//           {/* Timer Controls */}
//           <MdTimer className="ml-4" />
//           <div className="flex flex-row items-center justify-between space-x-2">
//             <button
//               onClick={handleDecrement}
//               className="rounded px-2 py-1 hover:bg-blue-200 flex items-center"
//             >
//               -
//             </button>
//             <span>{timer.toFixed(1)}s</span>
//             <button
//               onClick={handleIncrement}
//               className="rounded px-2 py-1 hover:bg-blue-200 flex items-center"
//             >
//               +
//             </button>
//           </div>
//         </div>
//         {/* Swap Design Button */}
//         <button className="bg-blue-100 rounded px-3 py-2 hover:bg-blue-200 flex items-center space-x-2">
//           <MdDashboard />
//           <span>Swap design</span>
//         </button>

//         {/* Shuffle Colors Button */}
//         <button className="bg-blue-100 rounded px-3 py-2 hover:bg-blue-200 flex items-center space-x-2">
//           <IoMdShuffle />
//           <span>Shuffle colors</span>
//         </button>
//       </div>
//       {/* <ResetModel
//         id={resetData}
//         resetResult={() => console.log("Reset Result")}
//       /> */}
//     </>
//   );
// };
const MessageTop = ({ masterSlideRef }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

  const startRecording = async () => {
    if (!masterSlideRef.current) return;

    const canvas = document.createElement("canvas");
    const stream = canvas.captureStream(30); // Capture at 30 FPS
    const context = canvas.getContext("2d");

    canvas.width = 1920; // Set canvas dimensions to 1080p
    canvas.height = 1080;

    mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: "video/webm" });
    recordedChunks.current = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.current.push(event.data);
    };

    const drawFrame = async () => {
      // Use html2canvas to render the masterSlideRef DOM node as a canvas
      const renderedCanvas = await html2canvas(masterSlideRef.current, {
        scale: 1,
        width: masterSlideRef.current.offsetWidth,
        height: masterSlideRef.current.offsetHeight,
      });

      // Clear the drawing canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the rendered canvas onto the recording canvas
      context.drawImage(renderedCanvas, 0, 0, canvas.width, canvas.height);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);

    const intervalId = setInterval(drawFrame, 1000 / 30); // Draw at 30 FPS

    mediaRecorderRef.current.onstop = () => {
      clearInterval(intervalId);

      const blob = new Blob(recordedChunks.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "master_slide_recording.webm";
      a.click();
    };
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-blue-50 rounded-lg border border-blue-500 p-3">
      {/* Preview Button */}
      <button className="bg-blue-100 rounded px-3 py-2 hover:bg-blue-200 flex items-center space-x-2">
        <FaPlay />
        <span>Preview</span>
      </button>
      {/* Recording Controls */}
      {isRecording ? (
        <button
          onClick={stopRecording}
          className="bg-red-100 rounded px-3 py-2 hover:bg-red-200 flex items-center space-x-2">
          Stop Recording
        </button>
      ) : (
        <button
          onClick={startRecording}
          className="bg-green-100 rounded px-3 py-2 hover:bg-green-200 flex items-center space-x-2">
          Start Recording
        </button>
      )}
      {/* Swap Design Button */}
      <button className="bg-blue-100 rounded px-3 py-2 hover:bg-blue-200 flex items-center space-x-2">
        <MdDashboard />
        <span>Swap design</span>
      </button>
      {/* Shuffle Colors Button */}
      <button className="bg-blue-100 rounded px-3 py-2 hover:bg-blue-200 flex items-center space-x-2">
        <IoMdShuffle />
        <span>Shuffle colors</span>
      </button>
    </div>
  );
};

export default MessageTop;
const MessageBottom = () => {
  return (
    <div className="flex p-2 m-3 bg-blue-50 rounded-lg border border-gray-400 text-center text-blue-500 font-semibold">
      <div className="flex m-auto gap-2">
        <AiOutlineEdit size="1.7em" className="fill-blue-500" />
        <div> Presenter notes</div>
      </div>
    </div>
  );
};

export { MessageTop, MessageBottom };
