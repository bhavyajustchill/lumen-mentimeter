export const slides = [
  {
    id: "slide_id-1",
    style: {
      background: "#f5f5f5",
      color: "#333333",
    },
    content_type: "mcq",
    content: {
      type: "single",
      title: { data: "What is ReactJS primarily used for?", style: {} },
      options: {
        data: [
          { id: 11, text: "Building user interfaces" },
          { id: 12, text: "Data analysis" },
          { id: 13, text: "Server-side rendering" },
          { id: 14, text: "Database management" },
        ],
        style: {},
      },
    },
    userResult: {
      11: ["User1", "User2", "User3"],
      12: ["User4"],
      13: ["User5", "User6"],
      14: [],
    },
  },
  {
    id: "slide_id-2",
    style: {
      background: "#f5f5f5",
      color: "#333333",
    },
    content_type: "mcq",
    content: {
      type: "single",
      title: {
        data: "Which of the following is not a lifecycle method in ReactJS?",
        style: {},
      },
      options: {
        data: [
          { id: 21, text: "componentDidMount" },
          { id: 22, text: "render" },
          { id: 23, text: "componentDidUpdate" },
          { id: 24, text: "updateComponent" },
        ],
        style: {},
      },
    },
    userResult: {
      11: ["User1", "User2", "User3"],
      12: [],
      13: ["User5", "User6"],
      14: [],
    },
  },
  {
    id: "slide_id-3",
    style: {
      background: "#f0f0f0",
      color: "#444444",
    },
    content_type: "mcq",
    content: {
      type: "multiple",
      title: {
        data: "Which of the following are features of ReactJS? (Choose 2)",
        style: {},
      },
      options: {
        data: [
          { id: 31, text: "Virtual DOM" },
          { id: 32, text: "JSX" },
          { id: 33, text: "Two-way data binding" },
          { id: 34, text: "MVC architecture" },
        ],
        style: {},
      },
    },
    userResult: {
      11: [],
      12: ["User1", "User2", "User3"],
      13: ["User5", "User6"],
      14: [],
    },
  },
  {
    id: "slide_id-4",
    style: {
      background: "#f0f0f0",
      color: "#444444",
    },
    content_type: "mcq",
    content: {
      type: "multiple",
      title: {
        data: "Which of the following are ways to create components in ReactJS? (Choose 2)",
        style: {},
      },
      options: {
        data: [
          { id: 41, text: "Using classes" },
          { id: 42, text: "Using functions" },
          { id: 43, text: "Using prototypes" },
          { id: 44, text: "Using objects" },
        ],
        style: {},
      },
    },
    userResult: {
      11: ["User5", "User6"],
      12: [],
      13: ["User1", "User2", "User3"],
      14: [],
    },
  },
];
