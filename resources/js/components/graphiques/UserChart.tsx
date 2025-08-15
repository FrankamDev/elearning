import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
 { name: "Jan", users: 30 },
 { name: "Feb", users: 45 },
 { name: "Mar", users: 60 },
];

export default function UsersChart() {
 return (
  <ResponsiveContainer width="100%" height={300}>
   <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="users" fill="#4f46e5" />
   </BarChart>
  </ResponsiveContainer>
 );
}
