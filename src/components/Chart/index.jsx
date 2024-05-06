"use client";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
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
      annotations: {
        xaxis: [
          {
            x: "07 Jan",
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
            x: "12 Jan",
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
            x: "07 Jan",
            y: 450000,
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

              text: "Start Using Viral System",
            },
          },
        ],
      },
    },
  };

  return (
    <div className="text-black max-w-6xl mx-auto">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
