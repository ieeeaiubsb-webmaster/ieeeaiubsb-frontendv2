import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const data: {
  id: number;
  faculty: string;
  dept: { name: string }[];
  color: string;
  logo: string;
}[] = [
  {
    id: 1,
    faculty: "Faculty of Engineering",
    dept: [{ name: "EEE" }, { name: "COE" }, { name: "IPE" }, { name: "Arch" }],
    color: "from-orange-500 via-orange-300 to-orange-300",
    logo: "/images/FE-logo.webp",
  },
  {
    id: 2,
    faculty: "Faculty of Science and Technology",
    dept: [{ name: "CSE" }, { name: "CS" }],
    color: "from-sky-700 via-sky-400 to-sky-700",
    logo: "/images/fst-short-logo.webp",
  },
];

export default function WhoCanJoin() {
  return (
    <>
      <span
        className={`flex items-center justify-center text-4xl font-bold text-sky-800`}
      >
        WHO CAN JOIN?
      </span>
      <div className="grid sm:grid-cols-2  py-4 bg-white w-full overflow-hidden">
        {data.map((items) => (
          <Card className={`bg-gradient-to-tr ${items.color}`} key={items.id}>
            <CardHeader>
              <CardTitle>
                <p className="text-white text-2xl">{items.faculty}</p>
              </CardTitle>
            </CardHeader>
            <CardContent className={"relative flex justify-end p-2"}>
              <Image
                src={items.logo}
                alt="faculty_logo"
                width={100}
                height={100}
                className={`object-contain`}
              />
            </CardContent>
            <CardContent className={"flex justify-start gap-4 w-full "}>
              {items.dept.map((name) => (
                <Badge
                  variant="outline"
                  className="text-white text-sm"
                  key={name.name}
                >
                  {name.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
