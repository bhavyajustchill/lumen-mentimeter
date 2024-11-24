import React from "react";
import ReactEcharts from "echarts-for-react";
import { slides } from "../../../utils/constants";

const McqChart = ({ id, activeSlide }) => {
  const slideData = slides[activeSlide];
  const chartData = slideData?.chartData || {};
  const { chartType, options, data } = chartData;

  const option = {
    color: ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC300"], // Custom color palette
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      padding: 10,
      textStyle: {
        color: "#fff",
        fontSize: 24,
      },
      formatter: (params) => {
        if (chartType === "scatter") {
          return `X: ${params.data[0]}, Y: ${params.data[1]}`;
        }
        return `${params.name}: ${params.value}`;
      },
    },
    xAxis:
      chartType === "bar" || chartType === "line" || chartType === "scatter"
        ? {
            type: chartType === "scatter" ? "value" : "category",
            data: chartType !== "scatter" ? options : null,
            axisLabel: {
              fontSize: 24,
              color: "#666",
            },
          }
        : undefined,
    yAxis:
      chartType === "bar" || chartType === "line" || chartType === "scatter"
        ? {
            type: "value",
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
            axisLabel: {
              fontSize: 24,
              color: "#666",
            },
          }
        : undefined,
    series: [
      {
        name: "Data",
        data: data,
        type: chartType,
        ...(chartType === "scatter" && { symbolSize: 10 }), // Scatter-specific property
        itemStyle: {
          normal: {
            color: (params) => {
              const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC300"];
              return colors[params.dataIndex % colors.length]; // Cycle through the palette
            },
          },
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: "50em", width: "100%" }} />;
};

export default McqChart;
