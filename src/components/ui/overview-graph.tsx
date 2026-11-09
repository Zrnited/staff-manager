import type { ChartMetrics } from "../../api/grade-levels/get-chart-metrics";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  type BarShapeProps,
  LabelList,
  Label,
  type LabelProps,
  Tooltip,
} from "recharts";

interface Props {
  data: ChartMetrics[];
}

export default function OverviewGraph({ data }: Props) {

  // #endregion
  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height } = props;

    return (
      <path
        strokeWidth={props.isActive ? 5 : 0}
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        stroke={"#2A9290"}
        fill={"#2A9290"}
        style={{
          transition: "stroke-width 0.3s ease-out",
        }}
      />
    );
  };

  const CustomColorLabel = (props: LabelProps) => {
    const fill = "#2A9290";
    return <Label {...props} fill={fill} />;
  };

  return (
    <section className="border border-[#E0E5EB] bg-white rounded-lg p-5 w-full space-y-4">
      <h1 className="font-semibold font-grotesk text-lg sm:text-xl">
        Company Profile Chart
      </h1>
      <div className="w-full">
        {data.length === 0 ? (
          <p className="text-[#8a7d8f] text-sm lg:text-base">
            No grade levels recorded. Create grade levels and assign employees
            to see chart.
          </p>
        ) : (
          <BarChart
            style={{
              width: "100%",
              // maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <Tooltip cursor={{ fillOpacity: 0.5 }} />
            <XAxis dataKey="level" />
            <YAxis width="auto" />
            <Bar dataKey="employeeCount" shape={TriangleBar} activeBar>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        )}
      </div>
    </section>
  );
}
