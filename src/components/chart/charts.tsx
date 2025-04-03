import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

export default function ShadcnChart() {
  const shadcnChartData = [
    { month: "1월", Dota2: 186, lol: 80 },
    { month: "2월", Dota2: 305, lol: 200 },
    { month: "3월", Dota2: 237, lol: 120 },
    { month: "4월", Dota2: 190, lol: 50 },
    { month: "5월", Dota2: 209, lol: 130 },
    { month: "6월", Dota2: 214, lol: 140 },
    { month: "7월", Dota2: 253, lol: 150 },
  ];
  const chartConfig = {
    Dota2: {
      label: "Dota2",
      color: "#2563eb",
    },
    lol: {
      label: "lol",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[230px] w-full"
    >
      <BarChart accessibilityLayer data={shadcnChartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Dota2" fill="var(--color-Dota2)" radius={4} />
        <Bar dataKey="lol" fill="var(--color-lol)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
