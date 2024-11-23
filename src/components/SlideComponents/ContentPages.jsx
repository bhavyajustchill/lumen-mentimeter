export const admin = "admin";
export const display = "display";
export const client = "client";
export const properties = "properties";

import McqSlideAdmin from "./Mcq/McqSlideAdmin";
import McqSlideDisplay from "./Mcq/McqSlideDisplay";
// import McqSlideClient from "./Mcq/McqSlideClient";
import McqSlideProperties from "./Mcq/McqSlideProperties";

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
