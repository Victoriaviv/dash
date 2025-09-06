import React from 'react';

const tasksData = [
  { name: 'Unable to upload file', date: 'August 05', status: 'High' },
  { name: 'Error-in-database-query', date: 'July 15', status: 'Medium' },
  { name: 'Authentication problem', date: 'September 20', status: 'High' },
  { name: 'Bug in search functionality', date: 'September 05', status: 'High' },
  { name: 'Compatibility issue with Firefox', date: 'July 25', status: 'Medium' },
];

const taskOverviewData = [
  { day: '21 Jan', onGoing: 45, finished: 20 },
  { day: '22 Jan', onGoing: 55, finished: 30 },
  { day: '23 Jan', onGoing: 65, finished: 40 },
  { day: '24 Jan', onGoing: 80, finished: 50 },
  { day: '25 Jan', onGoing: 100, finished: 60 },
  { day: '26 Jan', onGoing: 110, finished: 70 },
  { day: '27 Jan', onGoing: 126, finished: 87 },
];

const recentActivityData = [
  {
    author: 'Angelina Gotelli',
    time: '05:20 PM',
    action: 'has change',
    item: 'PD-979',
    status: 'Completed',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&auto=format',
    type: 'status',
  },
  {
    author: 'Max Alexander',
    time: '04:53 PM',
    action: 'comment on your',
    item: 'Post',
    comment: "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a2dd7c8fe2b?w=60&h=60&fit=crop&auto=format',
    type: 'comment',
  },
  {
    author: 'Eugene Stewart',
    time: '03:40 PM',
    action: 'comment on your',
    item: 'Post',
    comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&auto=format',
    type: 'comment',
  },
];

const statusColors = {
  High: 'bg-red-50 text-red-700 border-red-200',
  Medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  Low: 'bg-blue-50 text-blue-700 border-blue-200',
};

const ganttData = [
  {
    category: 'Design',
    tasks: [
      { name: 'User research', start: 1, end: 4, color: 'bg-yellow-500' },
      { name: 'Design system', start: 3, end: 6, color: 'bg-yellow-500' },
      { name: 'Prototype', start: 7, end: 11, color: 'bg-orange-500' },
    ],
  },
  {
    category: 'Development',
    tasks: [
      { name: 'Infra architure', start: 9, end: 13, color: 'bg-blue-300' },
      { name: 'Develop core modules', start: 11, end: 16, color: 'bg-green-300' },
      { name: 'Integrate modules', start: 18, end: 24, color: 'bg-blue-300' },
    ],
  },
];

const GanttChart = ({ data }) => {
  return (
    <div className="overflow-x-auto min-w-full">
      <div className="flex flex-col">
        {/* Dates Header */}
        <div className="flex w-full min-w-[1200px]">
          <div className="w-[150px] shrink-0"></div>
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className={`flex flex-col text-xs text-center border-r border-gray-200 w-12 shrink-0 ${i === 6 || i === 7 ? 'bg-gray-100' : ''}`}>
              <span>{i < 9 ? `0${i + 1}` : i + 1}</span>
              <span>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i % 7]}</span>
            </div>
          ))}
        </div>

        {/* Chart Rows */}
        <div className="flex w-full min-w-[1200px] border-t border-gray-200">
          <div className="w-[150px] shrink-0">
            {data.map((item, i) => (
              <div key={i} className="py-2 px-4 border-b border-gray-200 cursor-pointer text-gray-700">
                <span className="font-semibold text-sm">▾ {item.category}</span>
                {item.tasks.map((task, j) => (
                  <div key={j} className="text-xs text-gray-500 mt-1 pl-4">{task.name}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex-1 relative">
            {data.map((item, i) => (
              <div key={i} className="flex flex-col border-b border-gray-200 relative">
                <div className="h-6"></div> {/* Spacer for category label */}
                {item.tasks.map((task, j) => (
                  <div key={j} className="h-6 relative">
                    <div
                      className={`absolute top-1 left-0 rounded-full h-4 ${task.color} opacity-80`}
                      style={{
                        width: `${(task.end - task.start) * 48}px`,
                        transform: `translateX(${(task.start - 1) * 48}px)`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            ))}
            {/* Today's line */}
            <div className="absolute top-0 bottom-0 left-[288px] w-0.5 bg-blue-500 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-6 md:p-12 space-y-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Overview Cards */}
          <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-lg font-semibold text-gray-800">Projects Overview</h3>
    <button className="text-sm text-blue-600 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
      View all projects
    </button>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {/* Ongoing */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <span className="text-xl">⚙️</span>
      </div>
      <div>
        <p className="text-lg font-bold">12</p>
        <p className="text-sm text-gray-500">Ongoing projects</p>
      </div>
    </div>
    {/* Completed */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
        <span className="text-xl">✅</span>
      </div>
      <div>
        <p className="text-lg font-bold">68</p>
        <p className="text-sm text-gray-500">Projects completed</p>
      </div>
    </div>
    {/* Upcoming */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
        <span className="text-xl">🗓️</span>
      </div>
      <div>
        <p className="text-lg font-bold">7</p>
        <p className="text-sm text-gray-500">Upcoming projects</p>
      </div>
    </div>
  </div>
</div>


          {/* Calendar */}
          <div className="md:col-span-1 lg:col-span-1 bg-white p-6 rounded-lg shadow h-fit">
            <div className="flex justify-between items-center mb-4">
              <button>{"<"}</button>
              <h3 className="font-semibold text-gray-800">Sep 2025</h3>
              <button>{">"}</button>
            </div>
            <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-sm text-center">
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className={`p-1 rounded cursor-pointer ${i === 5 ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule & Today's Schedule Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Schedule</h2>
            <GanttChart data={ganttData} />
          </div>

          <div className="md:col-span-1 lg:col-span-1 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Schedule today</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-lg">📅</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Daily standup</p>
                  <p className="text-xs text-gray-500">10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-lg">☕</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Lunch break</p>
                  <p className="text-xs text-gray-500">12:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-lg">📢</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Townhall Event</p>
                  <p className="text-xs text-gray-500">03:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-lg">📝</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Write daily report</p>
                  <p className="text-xs text-gray-500">05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Tasks */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Current tasks</h3>
              <button className="text-sm text-gray-600 px-4 py-2 rounded-lg bg-gray-100">All tasks</button>
            </div>
            {tasksData.map((task, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <div>
                    <p className="font-medium text-gray-800">{task.name}</p>
                    <p className="text-xs text-gray-500">
                      <span className="text-xs">🗓️</span> {task.date}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[task.status]}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>

          {/* Task Overview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Task overview</h3>
            <div className="flex items-center gap-4 mb-4">
              <p className="font-bold text-xl">{taskOverviewData[taskOverviewData.length-1].onGoing + taskOverviewData[taskOverviewData.length-1].finished}</p>
              <p className="text-sm text-gray-500">Total Tasks</p>
              <span className="flex items-center text-sm ml-auto">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>
                {taskOverviewData[taskOverviewData.length-1].onGoing} On going
              </span>
              <span className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                {taskOverviewData[taskOverviewData.length-1].finished} Finished
              </span>
            </div>
            {/* Bar Chart Placeholder */}
            <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Bar Chart Placeholder</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent activity</h3>
              <button className="text-sm text-gray-600 px-4 py-2 rounded-lg bg-gray-100">View all</button>
            </div>
            <div className="space-y-6">
              {recentActivityData.map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <img src={activity.avatar} alt={activity.author} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className="font-medium text-gray-800">{activity.author}</p>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {activity.action} <span className="font-semibold">{activity.item}</span>
                      {activity.type === 'status' && (
                        <> status to <span className="font-semibold text-green-600">{activity.status}</span></>
                      )}
                    </p>
                    {activity.comment && (
                      <div className="mt-2 p-3 bg-gray-100 rounded-lg text-sm text-gray-700">
                        {activity.comment}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}