"use client";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

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

  const [state, setState] = useState({
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
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5],
        // colors: ["#000"],
      },
      title: {
        text: "Tiktok Followers",
        align: "left",
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
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
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f1f1f1",
      },
      toolbar: {
        show: false,
      },
    },
  });

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
