import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Arafat",
    physics: 85,
    chemistry: 78,
    math: 92,
  },
  {
    id: 2,
    name: "Easin",
    physics: 91,
    chemistry: 88,
    math: 95,
  },
  {
    id: 3,
    name: "Rahim",
    physics: 76,
    chemistry: 82,
    math: 79,
  },
  {
    id: 4,
    name: "Karim",
    physics: 68,
    chemistry: 74,
    math: 81,
  },
  {
    id: 5,
    name: "Nadia",
    physics: 94,
    chemistry: 90,
    math: 97,
  },
  {
    id: 6,
    name: "Sadia",
    physics: 88,
    chemistry: 85,
    math: 89,
  },
  {
    id: 7,
    name: "Tanvir",
    physics: 72,
    chemistry: 69,
    math: 75,
  },
  {
    id: 8,
    name: "Mim",
    physics: 81,
    chemistry: 87,
    math: 84,
  },
  {
    id: 9,
    name: "Hasan",
    physics: 79,
    chemistry: 76,
    math: 83,
  },
  {
    id: 10,
    name: "Ritu",
    physics: 96,
    chemistry: 93,
    math: 98,
  },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="blue"></Line>
        <Line dataKey={"physics"} stroke="purple"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
