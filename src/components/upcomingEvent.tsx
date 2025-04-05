import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "./magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <div
      className={`grid grid-cols-1 w-full md:grid-cols-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
    >
      <div className={`md:col-span-1`}>
        <h2 className={`text-3xl font-bold text-sky-800`}>Upcoming Event</h2>
        <p className={`pt-8`}>Event Description / Speaker Prof</p>
        <Button asChild variant="ghost" className="gap-1">
          <Link href="/">
            Learn more <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className={`md:col-span-1`}>
        <Card className={`relative overflow-hidden`}>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">Artificial Intelligence</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <span>23-March-2025</span>
              </div>
            </div>
            <CardTitle>AI Driven methods On Agriculture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-md bg-muted">
              <Image
                src="/images/UpcomingEvent.jpg"
                alt="banner"
                width={700}
                height={400}
                className="object-contain transition-all hover:scale-105"
              />
            </div>
          </CardContent>
          {/*<CardFooter className="mt-auto">*/}
          {/*  <Button asChild variant="ghost" className="gap-1">*/}
          {/*    <Link href="/">*/}
          {/*      Learn more <ArrowRightIcon className="h-4 w-4" />*/}
          {/*    </Link>*/}
          {/*  </Button>*/}
          {/*</CardFooter>*/}
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
