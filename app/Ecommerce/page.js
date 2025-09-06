"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import { DollarSign, ShoppingCart, Eye } from "lucide-react";
import { useRouter } from "next/navigation"; 

// === DATASETS ===

const profitTrend = [
  { date: "01 Jun", value: 250 },
  { date: "02 Jun", value: 320 },
  { date: "03 Jun", value: 290 },
  { date: "04 Jun", value: 350 },
  { date: "05 Jun", value: 340 },
  { date: "06 Jun", value: 420 },
  { date: "07 Jun", value: 380 },
];

const orderTrend = [
  { date: "01 Jun", value: 120 },
  { date: "02 Jun", value: 200 },
  { date: "03 Jun", value: 150 },
  { date: "04 Jun", value: 300 },
  { date: "05 Jun", value: 250 },
  { date: "06 Jun", value: 220 },
  { date: "07 Jun", value: 270 },
];

const impressionTrend = [
  { date: "01 Jun", value: 900 },
  { date: "02 Jun", value: 1100 },
  { date: "03 Jun", value: 980 },
  { date: "04 Jun", value: 1500 },
  { date: "05 Jun", value: 1300 },
  { date: "06 Jun", value: 1600 },
  { date: "07 Jun", value: 1400 },
];

// === Metric definitions ===
const metrics = {
  profit: {
    title: "Total Profit",
    value: "$82,373.21",
    change: "+3.4% from last month",
    icon: <DollarSign className="w-5 h-5" />,
    color: "text-green-600",
    bg: "bg-green-100",
    stroke: "#16a34a",
    data: profitTrend,
  },
  orders: {
    title: "Total Orders",
    value: "7,234",
    change: "-2.8% from last month",
    icon: <ShoppingCart className="w-5 h-5" />,
    color: "text-blue-600",
    bg: "bg-blue-100",
    stroke: "#3b82f6",
    data: orderTrend,
  },
  impressions: {
    title: "Impressions",
    value: "3.1M",
    change: "+4.6% from last month",
    icon: <Eye className="w-5 h-5" />,
    color: "text-purple-600",
    bg: "bg-purple-100",
    stroke: "#a855f7",
    data: impressionTrend,
  },
};

const topProducts = [
  {
    name: "Maneki Neko Poster",
    sold: 1249,
    change: 15.2,
    trend: "up",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Echoes Necklace",
    sold: 1145,
    change: 13.9,
    trend: "up",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Spiky Ring",
    sold: 1073,
    change: 9.5,
    trend: "up",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Maneki Neko Poster",
    sold: 1249,
    change: 15.2,
    trend: "up",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Echoes Necklace",
    sold: 1145,
    change: 13.9,
    trend: "up",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Spiky Ring",
    sold: 1073,
    change: 9.5,
    trend: "up",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=80&h=80&fit=crop&auto=format",
  },
];

const orders = [
  { id: "#92627", status: "Paid", date: "09/07/2022", customer: "Tara Fletcher", amount: 279.0 },
  { id: "#92509", status: "Pending", date: "26/06/2022", customer: "Joyce Freeman", amount: 831.0 },
  { id: "#91631", status: "Paid", date: "18/06/2022", customer: "Brittany Hale", amount: 142.0 },
];

// Re-using the same data structure for countries
const topCountries = [
  { country: "United States", flag: "🇺🇸", percentage: 38.61, color: "bg-blue-600" },
  { country: "Brazil", flag: "🇧🇷", percentage: 32.79, color: "bg-green-600" },
  { country: "India", flag: "🇮🇳", percentage: 26.42, color: "bg-yellow-600" },
  { country: "United Kingdom", flag: "🇬🇧", percentage: 17.42, color: "bg-purple-600" },
  { country: "Turkey", flag: "🇹🇷", percentage: 12.85, color: "bg-red-600" },
];

const TARGET = 1800;
const ACHIEVED = 1300;
const targetPercent = Math.round((ACHIEVED / TARGET) * 100);
const radialData = [{ name: "progress", value: targetPercent, fill: "hsl(var(--primary))" }];

export default function EcommerceDashboard() {
  const [selectedMetric, setSelectedMetric] = useState("profit");
  const metric = metrics[selectedMetric];
  const router = useRouter();


  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview & Recent Orders */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Clickable KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(metrics).map(([key, m]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedMetric(key)}
                    className={`cursor-pointer rounded-lg border p-4 flex items-center gap-4 transition ${
                      selectedMetric === key
                        ? "border-primary shadow-lg bg-muted/50"
                        : "border-transparent hover:border-muted/50 hover:bg-muted/30"
                    }`}
                  >
                    <div className={`rounded-full p-3 ${m.bg} ${m.color}`}>
                      {m.icon}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{m.title}</p>
                      <p className="text-xl font-bold">{m.value}</p>
                      <p className={`text-xs ${m.color}`}>{m.change}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="h-80 bg-muted rounded-lg p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={metric.data}
                    margin={{ top: 20, right: 24, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: 8,
                      }}
                    />
                    <Line type="monotone" dataKey="value" stroke={metric.stroke} strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Top Countries Card */}
          <Card>
            <CardHeader>
              <CardTitle>Top countries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="w-full lg:w-1/2 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Map Component Placeholder</span>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  {topCountries.map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-2xl">{c.flag}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{c.country}</p>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full ${c.color}`} style={{ width: `${c.percentage}%` }}></div>
                        </div>
                      </div>
                      <p className="text-sm font-medium">{c.percentage}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders Table */}
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/order/list")}
              >
                View all
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="text-left text-sm text-muted-foreground border-b">
                      <th className="pb-2 pr-4">ORDER</th>
                      <th className="pb-2 pr-4">STATUS</th>
                      <th className="pb-2 pr-4">DATE</th>
                      <th className="pb-2 pr-4">CUSTOMER</th>
                      <th className="pb-2 pr-4">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o, i) => (
                      <tr key={i} className="border-b text-sm">
                        <td className="py-2 pr-4">{o.id}</td>
                        <td className="py-2 pr-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            o.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {o.status}
                          </span>
                        </td>
                        <td className="py-2 pr-4">{o.date}</td>
                        <td className="py-2 pr-4">{o.customer}</td>
                        <td className="py-2 pr-4 font-medium">${o.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Sales Target */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Target</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">This month</p>
                <p className="text-xl font-bold">
                  {ACHIEVED / 1000}K / {(TARGET / 1000).toFixed(1)}K Units
                </p>
              </div>
              <div className="w-20 h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="75%"
                    outerRadius="100%"
                    barSize={8}
                    data={radialData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar dataKey="value" cornerRadius={999} background />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="fill-foreground text-sm font-semibold"
                    >
                      {targetPercent}%
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Top Products</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/products/list")}
              >
                View all
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {topProducts.map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={p.img} alt={p.name} className="w-10 h-10 rounded-lg object-cover  border-none" />
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">Sold: {p.sold}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold ${p.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {p.change > 0 ? `+${p.change}%` : `${p.change}%`}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}