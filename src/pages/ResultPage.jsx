import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const [customRequest, setCustomRequest] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const data = {
    "Student Performance Overview": ["Bar Chart", "Histogram"],
    "Distribution of Scores (CIA1, CIA2, Assignment)": ["Histogram"],
    "Comparative Performance (CIA1 vs CIA2)": ["Scatter Plot", "Line Chart"],
    "Total Marks Distribution": ["Histogram"],
    "Class Activity vs Practical Skill Relationship": ["Scatter Plot", "Bubble Chart"],
    "Book Observation and Record Analysis": ["Pie Chart", "Bar Chart"],
    "Top Performers in Each Category": ["Bar Chart"],
    "Average Scores per Activity": ["Bar Chart", "Radar Chart"],
    "Correlation Between Different Activities": ["Heatmap", "Scatter Plot"],
    "Class Activity Performance Distribution": ["Histogram"],
  };

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

  const handleCheckboxChange = (title, chartType) => {
    setSelectedData((prevState) => {
      const updated = { ...prevState };

      // If the chartType is already selected, deselect it by removing the title entirely
      if (updated[title] && updated[title].includes(chartType)) {
        delete updated[title];
      } else {
        // Otherwise, select only this chartType and deselect all others for this title
        updated[title] = [chartType];
      }

      return updated;
    });
  };

  const handleTitleCheckboxChange = (title) => {
    setSelectedData((prevState) => {
      const updated = { ...prevState };

      if (updated[title]) {
        delete updated[title]; // Remove title and its charts if deselected
      } else {
        updated[title] = [data[title][0]]; // Select only the first chart type
      }

      return updated;
    });
  };

  const handleDialogConfirm = () => {
    console.log({
      selectedData,
      customRequest,
    });
    setShowDialog(false);
    navigate("/edit-presentation");
  };

  const handleSubmit = () => {
    setShowDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-6 relative">
      <div className="flex flex-row w-full max-w-6xl gap-8">
        {/* Left Side: Question Cards and Text Area */}
        <div className="flex-1 flex flex-col">
          {/* Question Cards */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Select Topics and Charts</h1>
            <div className="flex flex-col gap-6">
              {Object.entries(data).map(([title, charts]) => (
                <div
                  key={title}
                  className="border rounded-lg p-4 shadow-sm border-gray-300 flex flex-col">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      checked={!!selectedData[title]}
                      onChange={() => handleTitleCheckboxChange(title)}
                      className="mr-2"
                    />
                    <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {charts.map((chart) => (
                      <label key={chart} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedData[title]?.includes(chart) || false}
                          onChange={() => handleCheckboxChange(title, chart)}
                          className="mr-2"
                        />
                        <span className="text-gray-600">{chart}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Area and Submit Button */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Create Your Request</h1>
          <textarea
            value={customRequest}
            onChange={(e) => setCustomRequest(e.target.value)}
            placeholder="Enter your custom request here..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={10}></textarea>
          <button
            onClick={handleSubmit}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </div>

        {/* Right Side: Infographic Cards */}
        <div className="flex-1 max-h-[800px]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Chart Previews</h1>
          <div className="grid grid-cols-2 gap-4">
            {infographics.map((graph) => (
              <div
                key={graph.name}
                className="border rounded-lg p-4 flex flex-col items-start justify-start shadow-sm border-gray-300">
                <img
                  src={graph.image}
                  alt={graph.name}
                  className="w-full h-auto object-contain mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-700 text-center">{graph.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Confirm Submission</h2>
            <p className="text-gray-600 mt-4">
              Are you sure you want to proceed with the selected topics, charts, and custom request?
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
