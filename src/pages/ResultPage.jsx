import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const [selectedGraphs, setSelectedGraphs] = useState([]);
  const [customRequest, setCustomRequest] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const infographics = [
    {
      name: "Pie Chart",
      image:
        "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/pie-chart-example.svg",
    },
    {
      name: "Line Chart",
      image:
        "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/line-chart-example.svg",
    },
    {
      name: "Bar Chart",
      image:
        "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/bar-chart-example.svg",
    },
    {
      name: "Scatter Plot",
      image:
        "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/scatter-plot-example.png",
    },
    {
      name: "Histogram",
      image:
        "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/histogram-chart-example.svg",
    },
    {
      name: "Bubble Chart",
      image:
        "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/bubble-chart-example.svg",
    },
    {
      name: "Radar Chart",
      image:
        "https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/radar-chart-example.svg",
    },
    {
      name: "Heatmap",
      image: "https://apexcharts.com/wp-content/uploads/2018/05/heatmap-color-range.svg",
    },
  ];

  const toggleGraphSelection = (name) => {
    if (selectedGraphs.includes(name)) {
      setSelectedGraphs(selectedGraphs.filter((graph) => graph !== name));
    } else {
      setSelectedGraphs([...selectedGraphs, name]);
    }
  };

  const handleDialogConfirm = () => {
    console.log({
      graphTypes: selectedGraphs,
      userPrompt: customRequest,
    });
    setShowDialog(false);
    navigate("/edit-presentation");
  };

  const handleSubmit = () => {
    setShowDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6 relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Choose Infographics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {infographics.map((graph) => (
          <div
            key={graph.name}
            onClick={() => toggleGraphSelection(graph.name)}
            className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center justify-center shadow-md transition-transform transform ${
              selectedGraphs.includes(graph.name) ? "border-blue-500 scale-105" : "border-gray-300"
            }`}>
            <img src={graph.image} alt={graph.name} className="w-24 h-24 object-cover mb-4" />
            <h2 className="text-lg font-semibold text-gray-700">{graph.name}</h2>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl mt-8">
        <textarea
          value={customRequest}
          onChange={(e) => setCustomRequest(e.target.value)}
          placeholder="Enter your custom request here..."
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}></textarea>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
        Submit
      </button>

      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Confirm Submission</h2>
            <p className="text-gray-600 mt-4">
              Are you sure you want to proceed with the selected infographics and custom request?
            </p>
            <div className="mt-6 flex justify-around">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
                Cancel
              </button>
              <button
                onClick={handleDialogConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
