import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const Events = [
  {
    title: "Cycling Adventure",
    description: "Join us for a thrilling cycling adventure in the mountains.",
    location: "Karachi",
    thumbnail: "https://images.pexels.com/photos/28005837/pexels-photo-28005837/free-photo-of-man-on-bike-trip-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: new Date().toLocaleDateString()
  },
  {
    title: "City Marathon",
    description: "Participate in our annual city marathon and push your limits.",
    location: "Lahore",
    thumbnail: "https://images.pexels.com/photos/5687454/pexels-photo-5687454.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Beach Cleanup",
    description: "Help us keep our beaches clean and beautiful.",
    location: "Islamabad",
    thumbnail: "https://images.pexels.com/photos/9034685/pexels-photo-9034685.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Food Festival",
    description: "Taste the best local dishes at our food festival.",
    location: "Karachi",
    thumbnail: "https://images.pexels.com/photos/13983276/pexels-photo-13983276.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Photography Workshop",
    description: "Learn the art of photography from professionals.",
    location: "Peshawar",
    thumbnail: "https://images.pexels.com/photos/17654423/pexels-photo-17654423/free-photo-of-man-sitting-and-showing-camera-on-tripod.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: new Date().toLocaleDateString()
  },
  // Add more events as needed...
];



export default function events() {
  return (
    <div className="min-h-screen my-10 mx-10">
      
      <div className="flex justify-between my-5 font-bold text-3xl">
        <h1>Events</h1>
        </div>
      <Table>
        <TableCaption>A list of your recent Events.</TableCaption>
        <TableHeader className="bg-slate-500">
          <TableRow >
            <TableHead className="text-white">Thumbnail</TableHead>
            <TableHead className="text-white">title</TableHead>
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white">Location</TableHead>
            <TableHead className="text-white">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Events.map((events) => (
            <TableRow key={events.title}>
              <TableCell className="">
                <Image
                  src={events.thumbnail}
                  width={100}  // Set the appropriate width
                  height={100}
                  className="rounded-full" // Set the appropriate height
                  alt={events.title} // Add alt text for accessibility
                />
              </TableCell>
              <TableCell>{events.title}</TableCell>
              <TableCell>{events.description}</TableCell>
              <TableCell className="">{events.location}</TableCell>
              <TableCell className="">{events.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
