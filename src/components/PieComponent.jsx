import React from "react";
import { PieChart, Pie, Cell } from "recharts";
const data = [
  { name: "Active", value: 103 },
  { name: "Approve", value: 27 },
  { name: "Reject", value: 22 },
];

const COLORS = ["#6418C3", "#F4BE37", "#39B29A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieComponent = () => {
  return (
    <div>
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className=" ">
        <div className=" grid grid-cols-3 mt-[15px] py-2 px-4  space-y-1.5 gap-x-16 ">
          {COLORS.map((item) => (
            <div
              className="h-[15px] w-[15px]  rounded-full self-center my-1"
              style={{ backgroundColor: item }}
            ></div>
            
          ))}
          {data.map((item) => (
              <p className="cursor-pointer space-x-2 font-medium text-xs  self-center font-roboto text-gray-400">
                {item.name}
              </p>
            ))}
          
        </div>

        
      </div>
      <div className=" grid grid-cols-3  px-4 mt-[15px] gap-x-16">
          {data.map((item) => (
            <div className="text-sm font-medium font-roboto self-center space-x-2 text-gray-500 ">{item.value}</div>
          ))}
        </div>
    </div>
  );
};

export default PieComponent;
