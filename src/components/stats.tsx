import { NumberTicker } from "./magicui/number-ticker";

const stats = [
  { id: 1, name: "Members", value: 322 },
  { id: 2, name: "Chapters", value: 4 },
  { id: 3, name: "Affinity Group", value: 1 },
  { id: 4, name: "Events", value: 500 },
];

export default function Stats() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none ">
          <dl className="bg-white mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-sky-200 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  <NumberTicker value={stat.value} />
                  {stat.name == "Events" && `+`}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
