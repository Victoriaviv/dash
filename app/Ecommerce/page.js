"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
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
import {
  DollarSign,
  ShoppingCart,
  Eye,
  Store,
  Share2,
} from "lucide-react";



const salesTrend = [
  { date: "01 Jun", value: 250 },
  { date: "02 Jun", value: 320 },
  { date: "03 Jun", value: 290 },
  { date: "04 Jun", value: 350 },
  { date: "05 Jun", value: 340 },
  { date: "06 Jun", value: 420 },
  { date: "07 Jun", value: 380 },
  { date: "08 Jun", value: 470 },
  { date: "09 Jun", value: 400 },
  { date: "10 Jun", value: 480 },
  { date: "11 Jun", value: 350 },
  { date: "12 Jun", value: 550 },
];

const topProducts = [
  {
    name: "Maneki Neko Poster",
    sold: 1249,
    change: 15.2,
    trend: "up",
    img: "https://images.unsplash.com/photo-1526312426976-593c2b999c1e?w=80&h=80&fit=crop&auto=format",
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
    img: "https://images.unsplash.com/photo-1603566234499-76f8d00bff56?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Pastel Petals Poster",
    sold: 1022,
    change: 2.3,
    trend: "up",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Il Limone",
    sold: 992,
    change: -0.7,
    trend: "down",
    img: "https://images.unsplash.com/photo-1502741126161-b048400d0859?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Ringed Earring",
    sold: 1201,
    change: -1.1,
    trend: "down",
    img: "https://images.unsplash.com/photo-1603565816273-8eaa5bd9f0b8?w=80&h=80&fit=crop&auto=format",
  },
];

const countries = [
  { name: "United States", flag: "🇺🇸", percentage: 38.61 },
  { name: "Brazil", flag: "🇧🇷", percentage: 32.79 },
  { name: "India", flag: "🇮🇳", percentage: 26.42 },
  { name: "United Kingdom", flag: "🇬🇧", percentage: 17.42 },
  { name: "Turkey", flag: "🇹🇷", percentage: 12.85 },
];

const orders = [
  { id: "#92627", status: "Paid", date: "09/07/2022", customer: "Tara Fletcher", amount: 279.0 },
  { id: "#92509", status: "Pending", date: "26/06/2022", customer: "Joyce Freeman", amount: 831.0 },
  { id: "#91631", status: "Paid", date: "18/06/2022", customer: "Brittany Hale", amount: 142.0 },
];



const TARGET = 1800;
const ACHIEVED = 1300;
const targetPercent = Math.round((ACHIEVED / TARGET) * 100);
const radialData = [{ name: "progress", value: targetPercent, fill: "hsl(var(--primary))" }];



export default function EcommerceDashboard() {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {/* Total profit */}
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="rounded-full p-3 bg-green-100 text-green-600">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Total profit</p>
              <div className="text-2xl font-bold">$82,373.21</div>
              <div className="text-xs text-green-600">+3.4% from last month</div>
            </div>
          </CardContent>
        </Card>

        {/* Total order */}
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="rounded-full p-3 bg-blue-100 text-blue-600">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Total order</p>
              <div className="text-2xl font-bold">7,234</div>
              <div className="text-xs text-red-600">-2.8% from last month</div>
            </div>
          </CardContent>
        </Card>

        {/* Impression */}
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="rounded-full p-3 bg-purple-100 text-purple-600">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Impression</p>
              <div className="text-2xl font-bold">3.1M</div>
              <div className="text-xs text-green-600">+4.6% from last month</div>
            </div>
          </CardContent>
        </Card>

        {/* Sales target (circle) */}
        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Sales target</p>
              <div className="text-xl font-bold">
                {ACHIEVED / 1000}K / {(TARGET / 1000).toFixed(1)}K Units
              </div>
              <div className="text-xs text-muted-foreground">Made this month year</div>
            </div>
            {/* Circular chart */}
            <div className="w-20 h-20 ">
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
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    dataKey="value"
                    cornerRadius={999}
                    background
                  />
                  {/* Center label */}
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
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart card */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-0">
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          {/* Make chart fill the card body: remove inner padding */}
          <CardContent className="p-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesTrend} margin={{ top: 20, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="date"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: 8,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top product card (with photos) */}
        <Card>
          <CardHeader className="pb-2 flex-row items-center justify-between">
            <CardTitle>Top product</CardTitle>
            <Button variant="ghost" size="sm">View all</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProducts.map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-10 h-10 rounded-lg object-cover ring-1 ring-border"
                  />
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">Sold: {p.sold}</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold ${
                    p.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {p.change > 0 ? `+${p.change}%` : `${p.change}%`}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Countries */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Top countries</h2>
            <div className="flex items-center justify-between">
              {/* Map placeholder */}
              <div className="w-1/2 h-60 bg-muted rounded-xl flex items-center justify-center">
                🌍 World Map
              </div>
              {/* Countries list */}
              <div className="w-1/2 space-y-4 pl-6">
                {countries.map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{c.flag}</span>
                      <span className="text-sm">{c.name}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-muted h-2 rounded">
                        <div
                          className="bg-primary h-2 rounded"
                          style={{ width: `${c.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{c.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Channel revenue with icons */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Channel revenue</h2>
              <Select defaultValue="monthly">
                <SelectTrigger className="w-24 bg-muted border-0 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <p className="text-2xl font-bold mt-4">
              3.4% <span className="text-sm font-normal text-muted-foreground">Growth Rate</span>
            </p>

            <div className="flex justify-between mt-4 text-xs text-muted-foreground">
              <span>28%</span>
              <span>32%</span>
              <span>40%</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
                <div className="mx-auto mb-2 w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <p className="font-semibold">$2.9K</p>
                <p className="text-xs text-muted-foreground">Online store</p>
              </div>

              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/30">
                <div className="mx-auto mb-2 w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Store className="w-4 h-4" />
                </div>
                <p className="font-semibold">$2.6K</p>
                <p className="text-xs text-muted-foreground">Physical store</p>
              </div>

              <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-950/30">
                <div className="mx-auto mb-2 w-9 h-9 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center">
                  <Share2 className="w-4 h-4" />
                </div>
                <p className="font-semibold">$2.1K</p>
                <p className="text-xs text-muted-foreground">Social media</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <Button size="sm">View Orders</Button>
          </div>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="text-left text-sm text-muted-foreground border-b">
                <th className="pb-2">ORDER</th>
                <th className="pb-2">STATUS</th>
                <th className="pb-2">DATE</th>
                <th className="pb-2">CUSTOMER</th>
                <th className="pb-2">AMOUNT SPENT</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={i} className="border-b text-sm">
                  <td className="py-2">{o.id}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        o.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="py-2">{o.date}</td>
                  <td className="py-2">{o.customer}</td>
                  <td className="py-2">${o.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
