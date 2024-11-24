// import TitlePointsAdmin from "./TitlePoints/TitlePointsAdmin";
// import TitlePointsClient from "./TitlePoints/TitlePointsClient";
// import TitlePointsDisplay from "./TitlePoints/TitlePointsDisplay";
// import TitlePointsProperties from "./TitlePoints/TitlePointsProperties";

import McqSlideAdmin from "./Mcq/McqSlideAdmin";
// import McqSlideClient from "./Mcq/McqSlideClient";
import McqSlideDisplay from "./Mcq/McqSlideDisplay";
import McqSlideProperties from "./Mcq/McqSlideProperties";

export const admin = "admin";
export const display = "display";
export const client = "client";
export const properties = "properties";

const ContentPages = {
  title_points: {
    admin: () => "TitlePointsAdmin",
    display: () => "TitlePointsDisplay",
    client: () => "TitlePointsClient",
    properties: () => "TitlePointsProperties",
  },

  mcq: {
    admin: McqSlideAdmin,
    display: McqSlideDisplay,
    client: () => "McqSlideClient",
    properties: McqSlideProperties,
  },
};

export default ContentPages;
