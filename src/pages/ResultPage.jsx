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

  const chartData = [
    {
      title: "Pie Chart Example",
      chartData: {
        type: "pie",
        data: {
          labels: ["Category A", "Category B", "Category C"],
          datasets: [
            {
              data: [30, 45, 25],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Pie Chart",
            },
          },
        },
      },
    },
    {
      title: "Line Chart Example",
      chartData: {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Sample Data",
              data: [10, 20, 15, 25, 30],
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Line Chart",
            },
          },
        },
      },
    },
    {
      title: "Bar Chart Example",
      chartData: {
        type: "bar",
        data: {
          labels: ["Product A", "Product B", "Product C"],
          datasets: [
            {
              label: "Sales",
              data: [100, 150, 200],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Bar Chart",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    },
    {
      title: "Scatter Plot Example",
      chartData: {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "Scatter Dataset",
              data: [
                { x: 1, y: 10 },
                { x: 2, y: 15 },
                { x: 3, y: 7 },
                { x: 4, y: 20 },
              ],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Scatter Plot",
            },
          },
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
          },
        },
      },
    },
    {
      title: "Histogram Example",
      chartData: {
        type: "bar",
        data: {
          labels: ["0-10", "11-20", "21-30", "31-40"],
          datasets: [
            {
              label: "Frequency",
              data: [5, 10, 15, 7],
              backgroundColor: "rgba(255, 159, 64, 0.2)",
              borderColor: "rgba(255, 159, 64, 1)",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Histogram",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    },
    {
      title: "Bubble Chart Example",
      chartData: {
        type: "bubble",
        data: {
          datasets: [
            {
              label: "Bubble Dataset",
              data: [
                { x: 10, y: 20, r: 5 },
                { x: 15, y: 10, r: 10 },
                { x: 20, y: 30, r: 15 },
              ],
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Bubble Chart",
            },
          },
        },
      },
    },
    {
      title: "Radar Chart Example",
      chartData: {
        type: "radar",
        data: {
          labels: ["Metric A", "Metric B", "Metric C", "Metric D"],
          datasets: [
            {
              label: "Dataset 1",
              data: [30, 40, 20, 10],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Radar Chart",
            },
          },
        },
      },
    },
    {
      title: "Heatmap Example",
      chartData: {
        type: "heatmap",
        data: {
          labels: ["Row 1", "Row 2", "Row 3"],
          datasets: [
            {
              label: "Heatmap Dataset",
              data: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
              ],
              backgroundColor: "rgba(255, 206, 86, 0.8)",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Heatmap",
            },
          },
        },
      },
    },
  ];

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

      // Initialize the topic array if not already present
      if (!updated[title]) {
        updated[title] = [];
      }

      // Toggle the chart type for the specific topic
      if (updated[title].includes(chartType)) {
        updated[title] = updated[title].filter((chart) => chart !== chartType);
      } else {
        updated[title] = [...updated[title], chartType];
      }

      // If no charts are selected, remove the topic entirely
      if (updated[title].length === 0) {
        delete updated[title];
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
        updated[title] = data[title]; // Add all chart types under the title
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
