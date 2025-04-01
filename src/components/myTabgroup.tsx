"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiechartDonut } from "@/components/piechart-donut";
import { MyBarChart } from "@/components/myBarChart";

export default function MyTabGroup() {
  return (
    <Tabs defaultValue="memberships" className="relative w-full">
      <TabsList className={"grid grid-cols-2 w-full"}>
        <TabsTrigger value={"memberships"} className={"w-full md:w-auto"}>
          Memberships
        </TabsTrigger>
        <TabsTrigger value={"events"} className={"w-full md:w-auto"}>
          Events
        </TabsTrigger>
      </TabsList>

      <TabsContent value="memberships" className="w-full h-full">
        <MyBarChart />
      </TabsContent>

      <TabsContent value="events" className="w-full h-full">
        <PiechartDonut />
      </TabsContent>
    </Tabs>
  );
}
