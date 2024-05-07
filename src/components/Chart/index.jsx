"use client";
import React, { useEffect, useState } from "react";

const Chart = () => {
  const [isReactApexChartLoaded, setReactApexChartLoaded] = useState(false);
  useEffect(() => {
    import("react-apexcharts")
      .then((module) => {
        setReactApexChartLoaded(true);
      })
      .catch((error) =>
        console.error("Error importing ReactApexChart:", error)
      );
  }, []);
  // Ensure the component is only rendered on the client-side
  if (typeof window === "undefined") return null;

  const ReactApexChart = require("react-apexcharts").default;

  const state = {
    series: [
      {
        name: "Session Duration",
        data: [1000, 2000, 3000, 4000, 6000, 8000, 1000000, 2000000, 2300000],
      },
    ],
    options: {
      chart: {
        height: 350, // Height of the chart
        type: "line", // Type of the chart (line, bar, pie, etc.)
        zoom: {
          enabled: false, // Whether zooming is enabled
        },
      },
      dataLabels: {
        enabled: false, // Whether data labels are enabled
      },
      stroke: {
        width: [5], // Width of the stroke (line thickness)
        // colors: ["#000"], // Colors of the stroke
      },
      title: {
        text: "Tiktok Followers", // Title of the chart
        align: "left", // Alignment of the title
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          // Formatter function for legend tooltip hover
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: {
        size: 0, // Size of the markers
        hover: {
          sizeOffset: 6, // Size offset on hover
        },
      },
      xaxis: {
        categories: [
          "01 Sep",
          "01 Oct",
          "01 Nov",
          "01 Dec",
          "02 Jan",
          "14 Feb",
          "02 Mar",
          "02 Apr",
          "06 May",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val >= 1000000
              ? `${val / 1000000}M`
              : val >= 1000
              ? `${val / 1000}k`
              : val;
          },
        },
      },
      tooltip: {
        y: [
          // Tooltip settings for Y-axis
          {
            title: {
              formatter: function (val) {
                return val + " (mins)"; // Custom formatter for the tooltip title
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session"; // Custom formatter for the tooltip title
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val; // Custom formatter for the tooltip title
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f1f1f1", // Color of the grid border
      },
      annotations: {
        xaxis: [
          {
            x: "14 Feb",
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "Start",
            },
          },
          {
            x: "06 May",
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "Now",
            },
          },
        ],

        points: [
          {
            x: "14 Feb",
            y: 600000,
            marker: {
              size: 8,
              fillColor: "#fff",
              strokeColor: "red",
              radius: 2,
              cssClass: "apexcharts-custom-class",
            },
            label: {
              borderColor: "#FF4560",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#FF4560",
              },

              text: "Started Using Viral System",
            },
          },
        ],
      },
    },
  };

  return (
    <div className="text-black mx-auto">
      <div id="chart">
        {isReactApexChartLoaded && (
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            height={350}
          />
        )}
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
