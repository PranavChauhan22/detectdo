import React from "react";
import { PieChart, Pie } from "recharts";


export default function Pie2(props) {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={props.data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={100}
        fill="#8884d8"
      />
      
    </PieChart>
  );
}
