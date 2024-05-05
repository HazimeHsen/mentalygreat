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
        data: [
          8000, 12000, 50000, 120000, 170000, 250000, 450000, 600000, 1200000,
          1800000, 2000000, 2300000,
        ],
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
        colors: ["#000"], // Colors of the stroke
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
          // X-axis categories (labels)
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
        ],
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
      toolbar: {
        show: false, // Whether to show the toolbar
      },
    },
  };

  return (
    <div className="text-black">
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
