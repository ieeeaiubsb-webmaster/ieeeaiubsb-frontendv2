export interface Event {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  imagePath: string;
  link: string;
}

export const recentEvents: Event[] = [
  {
    id: "event-1",
    category: "Conference",
    date: "May 20, 2025",
    title: "Webinar on “Data-Driven Electric Vehicle Customer Profiling",
    description: "Join industry leaders for a day of innovation and networking",
    imagePath: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
  {
    id: "event-2",
    category: "Workshop",
    date: "June 5, 2025",
    title: "Design Systems Masterclass",
    description: "Learn how to build and maintain scalable design systems",
    imagePath: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
  {
    id: "event-3",
    category: "Meetup",
    date: "June 15, 2025",
    title: "Community Hackathon",
    description: "Collaborate with peers to build innovative solutions",
    imagePath: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
];
