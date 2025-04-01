"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { year: "2020", members: 120, mobile: 80 },
  { year: "2021", members: 122, mobile: 200 },
  { year: "2022", members: 188, mobile: 120 },
  { year: "2023", members: 200, mobile: 190 },
  { year: "2024", members: 250, mobile: 130 },
  { year: "2025", members: 322, mobile: 140 },
];

const chartConfig = {
  members: {
    label: "Members",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function LinechartLabel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "circOut",
        },
      }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>2020 - 2025</CardDescription>
        </CardHeader>

        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={true}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 5)}
                hide={true}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent indicator="line" active={false} />
                }
              />

              <Line
                dataKey="members"
                type="natural"
                stroke="var(--color-members)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-members)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
              {/*<Line*/}
              {/*  dataKey="mobile"*/}
              {/*  type="natural"*/}
              {/*  stroke="var(--color-mobile)"*/}
              {/*  strokeWidth={2}*/}
              {/*  dot={{*/}
              {/*    fill: "var(--color-mobile)",*/}
              {/*  }}*/}
              {/*  activeDot={{*/}
              {/*    r: 6,*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <LabelList*/}
              {/*    position="bottom"*/}
              {/*    offset={12}*/}
              {/*    className="fill-foreground"*/}
              {/*    fontSize={12}*/}
              {/*  />*/}
              {/*</Line>*/}
            </LineChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Membership count in recent years <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total of Last 6 years
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
