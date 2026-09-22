"use client";

import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarShapeProps,
  ResponsiveContainer,
} from "recharts";

import { BookContext } from "@/app/context/bookContext";

const colors = [
  "#6366f1",
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#f43f5e",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      fill={color}
      opacity={0.9}
    />
  );
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{ value?: number | string }>;
  label?: string | number;
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-xl">
      <p className="mb-1 max-w-45 truncate text-sm font-semibold text-gray-900">
        {label}
      </p>

      <p className="text-sm text-indigo-600">
        {payload[0].value} Pages
      </p>
    </div>
  );
};

const ReadBookPage = () => {
  const { readBook } = useContext(BookContext);

  const data = readBook.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  const totalPages = data.reduce(
    (total, book) => total + book.pages,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-8">
      <div className="mx-auto container">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-indigo-600">
            Reading Statistics
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            My Read Books
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Track the books you have read and explore your reading
            progress through a simple visual overview.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Books Read
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {readBook.length}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Total books completed
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Pages
            </p>

            <h2 className="mt-2 text-3xl font-bold text-indigo-600">
              {totalPages}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Pages read in total
            </p>
          </div>

        </div>

        {/* Chart Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Pages Per Book
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Number of pages in each book you have read
              </p>
            </div>

            <div className="hidden rounded-xl bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 sm:block">
              {readBook.length} Books
            </div>
          </div>

          {data.length === 0 ? (
            <div className="flex min-h-87.5 items-center justify-center rounded-2xl bg-gray-50">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl">
                  📚
                </div>

                <h3 className="font-semibold text-gray-800">
                  No read books yet
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your reading statistics will appear here.
                </p>
              </div>
            </div>
          ) : (
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 10,
                    left: -10,
                    bottom: 60,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#6b7280",
                      fontSize: 12,
                    }}
                    angle={-25}
                    textAnchor="end"
                    interval={0}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#6b7280",
                      fontSize: 12,
                    }}
                  />

                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      fill: "#f3f4f6",
                      opacity: 0.6,
                    }}
                  />

                  <Bar
                    dataKey="pages"
                    shape={TriangleBar}
                    barSize={45}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ReadBookPage;