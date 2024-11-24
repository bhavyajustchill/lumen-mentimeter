// export const slides = [
//   {
//     id: "slide_id-1",
//     style: {
//       background: "#f5f5f5",
//       color: "#333333",
//     },
//     content_type: "mcq",
//     content: {
//       type: "single",
//       title: { data: "What is ReactJS primarily used for?", style: {} },
//       options: {
//         data: [
//           { id: 11, text: "Building user interfaces" },
//           { id: 12, text: "Data analysis" },
//           { id: 13, text: "Server-side rendering" },
//           { id: 14, text: "Database management" },
//         ],
//         style: {},
//       },
//     },
//     userResult: {
//       11: ["User1", "User2", "User3"],
//       12: ["User4"],
//       13: ["User5", "User6"],
//       14: [],
//     },
//   },
//   {
//     id: "slide_id-2",
//     style: {
//       background: "#f5f5f5",
//       color: "#333333",
//     },
//     content_type: "mcq",
//     content: {
//       type: "single",
//       title: {
//         data: "Which of the following is not a lifecycle method in ReactJS?",
//         style: {},
//       },
//       options: {
//         data: [
//           { id: 21, text: "componentDidMount" },
//           { id: 22, text: "render" },
//           { id: 23, text: "componentDidUpdate" },
//           { id: 24, text: "updateComponent" },
//         ],
//         style: {},
//       },
//     },
//     userResult: {
//       11: ["User1", "User2", "User3"],
//       12: [],
//       13: ["User5", "User6"],
//       14: [],
//     },
//   },
//   {
//     id: "slide_id-3",
//     style: {
//       background: "#f0f0f0",
//       color: "#444444",
//     },
//     content_type: "mcq",
//     content: {
//       type: "multiple",
//       title: {
//         data: "Which of the following are features of ReactJS? (Choose 2)",
//         style: {},
//       },
//       options: {
//         data: [
//           { id: 31, text: "Virtual DOM" },
//           { id: 32, text: "JSX" },
//           { id: 33, text: "Two-way data binding" },
//           { id: 34, text: "MVC architecture" },
//         ],
//         style: {},
//       },
//     },
//     userResult: {
//       11: [],
//       12: ["User1", "User2", "User3"],
//       13: ["User5", "User6"],
//       14: [],
//     },
//   },
//   {
//     id: "slide_id-4",
//     style: {
//       background: "#f0f0f0",
//       color: "#444444",
//     },
//     content_type: "mcq",
//     content: {
//       type: "multiple",
//       title: {
//         data: "Which of the following are ways to create components in ReactJS? (Choose 2)",
//         style: {},
//       },
//       options: {
//         data: [
//           { id: 41, text: "Using classes" },
//           { id: 42, text: "Using functions" },
//           { id: 43, text: "Using prototypes" },
//           { id: 44, text: "Using objects" },
//         ],
//         style: {},
//       },
//     },
//     userResult: {
//       11: ["User5", "User6"],
//       12: [],
//       13: ["User1", "User2", "User3"],
//       14: [],
//     },
//   },
// ];

// export const chartData = [
//   {
//     title: "Pie Chart Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Pie Chart",
//           left: "center",
//         },
//         tooltip: {
//           trigger: "item",
//         },
//         legend: {
//           orient: "vertical",
//           left: "left",
//         },
//         series: [
//           {
//             name: "Categories",
//             type: "pie",
//             radius: "50%",
//             data: [
//               { value: 30, name: "Category A" },
//               { value: 45, name: "Category B" },
//               { value: 25, name: "Category C" },
//             ],
//             emphasis: {
//               itemStyle: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: "rgba(0, 0, 0, 0.5)",
//               },
//             },
//           },
//         ],
//       },
//     },
//   },
//   {
//     title: "Line Chart Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Line Chart",
//           left: "center",
//         },
//         tooltip: {
//           trigger: "axis",
//         },
//         xAxis: {
//           type: "category",
//           data: ["January", "February", "March", "April", "May"],
//         },
//         yAxis: {
//           type: "value",
//         },
//         series: [
//           {
//             data: [10, 20, 15, 25, 30],
//             type: "line",
//             smooth: true,
//             areaStyle: {},
//           },
//         ],
//       },
//     },
//   },
//   {
//     title: "Bar Chart Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Bar Chart",
//           left: "center",
//         },
//         tooltip: {
//           trigger: "axis",
//         },
//         xAxis: {
//           type: "category",
//           data: ["Product A", "Product B", "Product C"],
//         },
//         yAxis: {
//           type: "value",
//         },
//         series: [
//           {
//             data: [100, 150, 200],
//             type: "bar",
//             itemStyle: {
//               color: "#5470C6",
//             },
//           },
//         ],
//       },
//     },
//   },
//   {
//     title: "Scatter Plot Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Scatter Plot",
//           left: "center",
//         },
//         tooltip: {
//           trigger: "item",
//         },
//         xAxis: {
//           type: "value",
//         },
//         yAxis: {
//           type: "value",
//         },
//         series: [
//           {
//             symbolSize: 10,
//             data: [
//               [1, 10],
//               [2, 15],
//               [3, 7],
//               [4, 20],
//             ],
//             type: "scatter",
//           },
//         ],
//       },
//     },
//   },
//   {
//     title: "Histogram Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Histogram",
//           left: "center",
//         },
//         tooltip: {
//           trigger: "axis",
//         },
//         xAxis: {
//           type: "category",
//           data: ["0-10", "11-20", "21-30", "31-40"],
//         },
//         yAxis: {
//           type: "value",
//         },
//         series: [
//           {
//             data: [5, 10, 15, 7],
//             type: "bar",
//             itemStyle: {
//               color: "#91CC75",
//             },
//           },
//         ],
//       },
//     },
//   },
//   {
//     title: "Bubble Chart Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Bubble Chart",
//           left: "center",
//         },
//         tooltip: {
//           trigger: "item",
//         },
//         xAxis: {
//           type: "value",
//         },
//         yAxis: {
//           type: "value",
//         },
//         series: [
//           {
//             data: [{ value: [10, 20, 5] }, { value: [15, 10, 10] }, { value: [20, 30, 15] }],
//             type: "scatter",
//             symbolSize: function (data) {
//               return data[2];
//             },
//             itemStyle: {
//               opacity: 0.8,
//             },
//           },
//         ],
//       },
//     },
//   },
//   {
//     title: "Radar Chart Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Radar Chart",
//           left: "center",
//         },
//         tooltip: {},
//         radar: {
//           indicator: [
//             { name: "Metric A", max: 50 },
//             { name: "Metric B", max: 50 },
//             { name: "Metric C", max: 50 },
//             { name: "Metric D", max: 50 },
//           ],
//         },
//         series: [
//           {
//             name: "Dataset 1",
//             type: "radar",
//             data: [
//               {
//                 value: [30, 40, 20, 10],
//                 name: "Dataset 1",
//               },
//             ],
//           },
//         ],
//       },
//     },
//   },
//   {
//     title: "Heatmap Example",
//     chartData: {
//       option: {
//         title: {
//           text: "Sample Heatmap",
//           left: "center",
//         },
//         tooltip: {
//           position: "top",
//         },
//         xAxis: {
//           type: "category",
//           data: ["A", "B", "C"],
//         },
//         yAxis: {
//           type: "category",
//           data: ["X", "Y", "Z"],
//         },
//         series: [
//           {
//             type: "heatmap",
//             data: [
//               [0, 0, 5],
//               [0, 1, 10],
//               [0, 2, 15],
//               [1, 0, 20],
//               [1, 1, 25],
//               [1, 2, 30],
//               [2, 0, 35],
//               [2, 1, 40],
//               [2, 2, 45],
//             ],
//             label: {
//               show: true,
//             },
//             itemStyle: {
//               emphasis: {
//                 shadowBlur: 10,
//                 shadowColor: "rgba(0, 0, 0, 0.5)",
//               },
//             },
//           },
//         ],
//       },
//     },
//   },
// ];

export const slides = [
  {
    id: 1,
    content: {
      title: "Student Performance Overview",
      options: {
        data: [
          { text: "Adhiya Mansee Bhupatrai", id: 1 },
          { text: "Akbari Krupali Jayantibhai", id: 2 },
          { text: "Ashara Janvi Pareshbhai", id: 3 },
          { text: "Bhalodiya Milan .", id: 4 },
          { text: "Chavda Drashti Chetanbhai", id: 5 },
        ],
      },
    },
    chartData: {
      chartType: "bar",
      options: [
        "Adhiya Mansee Bhupatrai",
        "Akbari Krupali Jayantibhai",
        "Ashara Janvi Pareshbhai",
        "Bhalodiya Milan .",
        "Chavda Drashti Chetanbhai",
      ],
      data: [151, 148, 147, 147, 130],
    },
  },
  {
    id: 2,
    content: {
      title: "Comparative Performance (CIA1 vs CIA2)",
      options: {
        data: [
          { text: "Adhiya Mansee Bhupatrai", id: 1 },
          { text: "Akbari Krupali Jayantibhai", id: 2 },
          { text: "Ashara Janvi Pareshbhai", id: 3 },
          { text: "Bhalodiya Milan .", id: 4 },
          { text: "Chavda Drashti Chetanbhai", id: 5 },
        ],
      },
    },
    chartData: {
      chartType: "line",
      options: [
        "Adhiya Mansee Bhupatrai",
        "Akbari Krupali Jayantibhai",
        "Ashara Janvi Pareshbhai",
        "Bhalodiya Milan .",
        "Chavda Drashti Chetanbhai",
      ],
      data: [21, 23, 21, 26, 26],
    },
  },
  {
    id: 3,
    content: {
      title: "Book Observation and Record Analysis",
      options: {
        data: [
          { text: "Category A", id: 1 },
          { text: "Category B", id: 2 },
          { text: "Category C", id: 3 },
        ],
      },
    },
    chartData: {
      chartType: "pie",
      options: ["Book Observation", "Book Record"],
      data: [
        { value: 590, name: "Book Observation" },
        { value: 590, name: "Book Record" },
      ],
    },
  },
  {
    id: 4,
    content: {
      title: "Class Activity vs Practical Skill Relationship",
      options: {
        data: [
          { text: "Point 1", id: 1 },
          { text: "Point 2", id: 2 },
          { text: "Point 3", id: 3 },
        ],
      },
    },
    chartData: {
      chartType: "scatter",
      options: [
        "Adhiya Mansee Bhupatrai",
        "Akbari Krupali Jayantibhai",
        "Ashara Janvi Pareshbhai",
        "Bhalodiya Milan .",
        "Chavda Drashti Chetanbhai",
      ],
      data: [
        [20, 30],
        [20, 20],
        [20, 28],
        [20, 23],
        [8, 20],
      ],
    },
  },
];
