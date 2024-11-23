import React from "react";
import ReactEcharts from "echarts-for-react";
import { slides } from "../../../utils/constants";

const McqChart = ({ data, id, activeSlide }) => {
  const option = {
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      padding: 10,
      textStyle: {
        color: "#fff",
        fontSize: 24, // Adjust tooltip font size
      },
      formatter: (params) => {
        const dataIndex = params.dataIndex;
        const optionId = Object.keys(data)[dataIndex];
        const users = data[optionId];
        const userNames = users.join(", "); // Join user names with a comma and space
        const optionText =
          slides[activeSlide]?.content?.options?.data?.[dataIndex]?.text;
        return `${optionText}<br><br>Students:<br/> ${userNames}`;
      },
    },
    xAxis: {
      data: Array.from(
        { length: slides[activeSlide]?.content?.options?.data?.length },
        (_, i) => String.fromCharCode(65 + i)
      ),

      axisLabel: {
        fontSize: 24, // Adjust x-axis label font size
        color: "#666",
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      axisLabel: {
        fontSize: 24, // Adjust y-axis label font size
        color: "#666",
      },
    },
    series: [
      {
        name: "Score",
        data: data ? Object.values(data).map((value) => value.length) : [],
        type: "bar",
        itemStyle: {
          normal: {
            color: "rgb(25, 108, 255)",
          },
          emphasis: {
            color: "rgba(25, 108, 255, 0.8)",
          },
        },
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={{ height: "50em", width: "100%" }} />
  );
};

export default McqChart;
