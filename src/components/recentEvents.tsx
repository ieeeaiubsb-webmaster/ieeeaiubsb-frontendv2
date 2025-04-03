import { CalendarIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentEvents } from "@/lib/recentEventsData";
import Image from "next/image";

export default function RecentEvents() {
  return (
    <section className="my-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-sky-800 mb-2">
            Recent Events
          </h2>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {recentEvents.map((event) => (
            <Card key={event.id} className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                </div>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-square overflow-hidden rounded-md bg-muted">
                  <Image
                    src={event.imagePath}
                    alt={event.title}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild variant="ghost" className="gap-1">
                  <Link href={event.link}>
                    Learn more <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
