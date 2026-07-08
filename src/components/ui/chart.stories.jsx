import {
  Bar,
  BarChart,
  CartesianGrid,
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import {
  ChartBubble,
  ChartContainer,
  ChartDonut,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from './chart';

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    className: 'text-pink-500',
  },
  mobile: {
    label: 'Mobile',
    className: 'text-yellow-400',
  },
};

const lineChartData = [
  { month: 'January', desktop: 120, mobile: 90 },
  { month: 'February', desktop: 180, mobile: 110 },
  { month: 'March', desktop: 150, mobile: 135 },
  { month: 'April', desktop: 210, mobile: 160 },
  { month: 'May', desktop: 240, mobile: 185 },
  { month: 'June', desktop: 220, mobile: 200 },
  { month: 'July', desktop: 260, mobile: 230 },
];

const areaChartData = [
  { month: 'January', desktop: 180, mobile: 120 },
  { month: 'February', desktop: 240, mobile: 150 },
  { month: 'March', desktop: 190, mobile: 170 },
  { month: 'April', desktop: 280, mobile: 210 },
  { month: 'May', desktop: 320, mobile: 240 },
  { month: 'June', desktop: 300, mobile: 260 },
  { month: 'July', desktop: 360, mobile: 290 },
];

const donutData = [
  { name: 'Food & Drink', value: 30 },
  { name: 'Sports', value: 24 },
  { name: 'Entertainment', value: 20 },
  { name: 'Travel', value: 16 },
  { name: 'Home & Garden', value: 10 },
];

const donutConfig = {
  'Food & Drink': { label: 'Food & Drink', className: 'text-blue-500' },
  Sports: { label: 'Sports', className: 'text-emerald-500' },
  Entertainment: { label: 'Entertainment', className: 'text-orange-500' },
  Travel: { label: 'Travel', className: 'text-violet-500' },
  'Home & Garden': { label: 'Home & Garden', className: 'text-emerald-600' },
};

const bubblePinkData = [
  { index: 1, category: 'Grocery Haul', value: 8.3, size: 155 },
  { index: 2, category: 'Family Dinner', value: 7.8, size: 178 },
  { index: 3, category: 'Healthy Eating', value: 8.5, size: 210 },
  { index: 4, category: 'Fresh Produce', value: 7.7, size: 150 },
  { index: 5, category: 'Meal Prep', value: 7.2, size: 170 },
  { index: 6, category: 'Weekend BBQ', value: 6.4, size: 138 },
  { index: 7, category: 'Snack Time', value: 5.8, size: 112 },
  { index: 8, category: 'Baking & Sweets', value: 6.9, size: 145 },
  { index: 9, category: 'Beverages', value: 7.5, size: 160 },
  { index: 10, category: 'Quick & Easy', value: 6.1, size: 132 },
];

const bubbleYellowData = [
  { index: 1, category: 'Grocery Haul', value: 4.3, size: 70 },
  { index: 2, category: 'Family Dinner', value: 3.9, size: 62 },
  { index: 3, category: 'Healthy Eating', value: 4.7, size: 58 },
  { index: 4, category: 'Fresh Produce', value: 4.1, size: 76 },
  { index: 5, category: 'Meal Prep', value: 3.7, size: 64 },
  { index: 6, category: 'Weekend BBQ', value: 3.2, size: 52 },
  { index: 7, category: 'Snack Time', value: 2.5, size: 44 },
  { index: 8, category: 'Baking & Sweets', value: 3.0, size: 48 },
  { index: 9, category: 'Beverages', value: 3.4, size: 54 },
  { index: 10, category: 'Quick & Easy', value: 2.8, size: 42 },
];

const bubbleChartConfig = {
  Pink: { label: 'Pink', className: 'text-pink-500' },
  Yellow: { label: 'Yellow', className: 'text-yellow-400' },
};

export default {
  title: 'UI/Chart',
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
};

export const BarChartInteractive = {
  render: () => (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="text-base">Bar Chart - Interactive</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="currentColor" className="text-pink-500" radius={4} />
              <Bar dataKey="mobile" fill="currentColor" className="text-yellow-400" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const DonutChartInteractive = {
  render: () => (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="text-base">Donut Chart - Interactive</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartDonut
          data={donutData}
          config={donutConfig}
          dataKey="value"
          nameKey="name"
          innerRadius={72}
          outerRadius={104}
        />
      </CardContent>
    </Card>
  ),
};

export const LineChartInteractive = {
  render: () => (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="text-base">Line Chart - Interactive</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart accessibilityLayer data={lineChartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="desktop"
                stroke="currentColor"
                className="text-pink-500"
                strokeWidth={3}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="mobile"
                stroke="currentColor"
                className="text-yellow-400"
                strokeWidth={3}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const AreaChartInteractive = {
  render: () => (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="text-base">Area Chart - Interactive</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart accessibilityLayer data={areaChartData}>
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#facc15" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#facc15" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                type="monotone"
                dataKey="desktop"
                stroke="currentColor"
                fill="url(#fillDesktop)"
                className="text-pink-500"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="mobile"
                stroke="currentColor"
                fill="url(#fillMobile)"
                className="text-yellow-400"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const BubbleChartInteractive = {
  render: () => (
    <Card className="mx-auto max-w-5xl">
      <CardHeader>
        <CardTitle className="text-base">Bubble Chart - Interactive</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartBubble
          config={bubbleChartConfig}
          className="h-[620px] w-full"
          showLegend={false}
          xTicks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          xTickFormatter={(value) => {
            const labels = [
              'Grocery Haul',
              'Family Dinner',
              'Healthy Eating',
              'Fresh Produce',
              'Meal Prep',
              'Weekend BBQ',
              'Snack Time',
              'Baking & Sweets',
              'Beverages',
              'Quick & Easy',
            ];

            return labels[value - 1] ?? value;
          }}
          series={[
            {
              name: 'Pink',
              data: bubblePinkData,
              className: 'text-pink-500',
            },
            {
              name: 'Yellow',
              data: bubbleYellowData,
              className: 'text-yellow-400',
            },
          ]}
        />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
            <span>Pink bubbles indicate higher relevance / stronger activity.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span>Yellow bubbles indicate lower relevance / lighter activity.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};
