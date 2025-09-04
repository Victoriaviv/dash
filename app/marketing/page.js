"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Search,
  Bell,
  Settings,
  User,
  Cog,
  Leaf,
  Rocket,
  Users,
  FileText,
  DollarSign,
  Target,
} from "lucide-react"
import {
  ComposedChart,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

const adsData = [
  { month: "01 Jan", greenBars: 430, orangeBars: 0, line: 32 },
  { month: "02 Jan", greenBars: 520, orangeBars: 0, line: 42 },
  { month: "03 Jan", greenBars: 0, orangeBars: 410, line: 35 },
  { month: "04 Jan", greenBars: 680, orangeBars: 0, line: 45 },
  { month: "05 Jan", greenBars: 0, orangeBars: 220, line: 28 },
  { month: "06 Jan", greenBars: 410, orangeBars: 0, line: 35 },
  { month: "07 Jan", greenBars: 0, orangeBars: 180, line: 18 },
  { month: "08 Jan", greenBars: 350, orangeBars: 0, line: 30 },
  { month: "09 Jan", greenBars: 750, orangeBars: 0, line: 25 },
  { month: "10 Jan", greenBars: 0, orangeBars: 320, line: 22 },
  { month: "11 Jan", greenBars: 0, orangeBars: 250, line: 15 },
  { month: "12 Jan", greenBars: 0, orangeBars: 180, line: 12 },
]

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
const data = [
  {
    subject: '1',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: '2',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '3',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '4',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: '5',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: '6',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const campaignsData = [
  {
    id: 1,
    name: "Summer Sale",
    type: "Promotional",
    status: "Completed",
    budget: "$20,000",
    conversions: "50%",
    start: "21 Aug 2025",
    end: "03 Sep 2025",
    active: false,
    icon: Cog,
  },
  {
    id: 2,
    name: "Back-to-School Promo",
    type: "Seasonal",
    status: "Active",
    budget: "$15,000",
    conversions: "35%",
    start: "26 Aug 2025",
    end: "04 Sep 2025",
    active: true,
    icon: Leaf,
  },
  {
    id: 3,
    name: "New Product Launch",
    type: "Seasonal",
    status: "Active",
    budget: "$30,000",
    conversions: "60%",
    start: "29 Aug 2025",
    end: "06 Sep 2025",
    active: true,
    icon: Leaf,
  },
  {
    id: 4,
    name: "Holiday Gift Guide",
    type: "Launch",
    status: "Scheduled",
    budget: "$50,000",
    conversions: "0%",
    start: "26 Aug 2025",
    end: "04 Sep 2025",
    active: false,
    icon: Rocket,
  },
  {
    id: 5,
    name: "Clearance Sale",
    type: "Promotional",
    status: "Active",
    budget: "$10,000",
    conversions: "20%",
    start: "26 Aug 2025",
    end: "04 Sep 2025",
    active: true,
    icon: Cog,
  },
]

export default function DashboardPage() {
  const [chartFilter, setChartFilter] = useState("All") 

  return (
  
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-100">
        

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">KPI summary</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Total marketing spend
                  </CardTitle>
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-pink-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$192,817</div>
                  <p className="text-xs text-green-600">+5.3% vs last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    ROI
                  </CardTitle>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">270%</div>
                  <p className="text-xs text-green-600">+8.1% vs last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Conversion rates
                  </CardTitle>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.5%</div>
                  <p className="text-xs text-green-600">+0.9% vs last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Total leads
                  </CardTitle>
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,289</div>
                  <p className="text-xs text-green-600">+16.2% vs last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Ads performance */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">Ads performance</CardTitle>
                  <div className="flex space-x-4">
                    {["All", "Campaign", "Email"].map((type) => (
                      <Button
                        key={type}
                        variant={chartFilter === type ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setChartFilter(type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      {chartFilter === "Email" ? (
                        <LineChart width={300} height={100} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                      ) : (
                        <ComposedChart data={adsData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Bar dataKey="greenBars" fill="#C8ECD9" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="orangeBars" fill="#FFC58F" radius={[4, 4, 0, 0]} />
                          {chartFilter === "All" && (
                            <Line
                              type="monotone"
                              dataKey="line"
                              stroke="#3b82f6"
                              strokeWidth={2}
                              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 0 }}
                            />
                          )}
                        </ComposedChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Lead Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Lead performance score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
                  </div>

                  {/* Lead Metrics */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900">1</span>
                        <span className="text-sm text-gray-600">Lead Volume</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700">78%</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900">2</span>
                        <span className="text-sm text-gray-600">Conversion Rate</span>
                      </div>
                      <Badge className="bg-orange-100 text-orange-700">57%</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900">3</span>
                        <span className="text-sm text-gray-600">Lead Quality</span>
                      </div>
                      <Badge className="bg-red-100 text-red-700">26%</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900">4</span>
                        <span className="text-sm text-gray-600">Response Time</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700">76%</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900">5</span>
                        <span className="text-sm text-gray-600">Cost per Lead</span>
                      </div>
                      <Badge className="bg-orange-100 text-orange-700">42%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Campaigns */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Campaigns</CardTitle>
                  <Button variant="outline" size="sm">
                    Create campaign
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Campaign
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Budget
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Conversions
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Start
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                          End
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {campaignsData.map((campaign) => {
                        const IconComponent = campaign.icon
                        return (
                          <tr key={campaign.id} className="hover:bg-gray-50">
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-3">
                                <Switch checked={campaign.active} />
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                  <IconComponent className="h-4 w-4 text-gray-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900">
                                    {campaign.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {campaign.type}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <Badge
                                className={
                                  campaign.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : campaign.status === "Active"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-orange-100 text-orange-800"
                                }
                              >
                                {campaign.status}
                              </Badge>
                            </td>
                            <td className="py-4 px-4 text-gray-900">
                              {campaign.budget}
                            </td>
                            <td className="py-4 px-4 text-gray-900">
                              {campaign.conversions}
                            </td>
                            <td className="py-4 px-4 text-gray-500">
                              {campaign.start}
                            </td>
                            <td className="py-4 px-4 text-gray-500">
                              {campaign.end}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>


  )
}
