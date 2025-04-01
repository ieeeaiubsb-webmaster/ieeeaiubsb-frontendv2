import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "./magicui/border-beam";

export default function UpcomingEvents() {
  return (
    <div className={`grid grid-cols-1 w-full md:grid-cols-2 `}>
      <div className={`md:col-span-1`}>
        <h2 className={`text-3xl font-bold text-sky-800`}>Upcoming Event</h2>
      </div>
      <div className={`md:col-span-1`}>
        <Card className={`relative overflow-hidden`}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>

          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-red-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            className="from-transparent via-blue-500 to-transparent"
          />
        </Card>
      </div>
    </div>
  );
}
