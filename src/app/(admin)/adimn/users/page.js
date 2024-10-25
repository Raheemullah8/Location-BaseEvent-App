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

const Users = [
  {
    fullName: "Ali Khan",
    email: "ali.khan@gmail.com",
    location: "Karachi",
    profileImge: "https://media.istockphoto.com/id/1442772282/photo/front-view-portrait-of-a-modern-man-standing-with-arms-crossed-looking-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Af9TXe2LbWLRCx4EfhHyEOSawU9W6cDhx1cxzatwiko=",
    events: 3,
  },
  {
    fullName: "Sara Ahmed",
    email: "sara.ahmed@gmail.com",
    location: "Lahore",
    profileImge: "https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    events: 7,
  },
  {
    fullName: "Zara Malik",
    email: "zara.malik@gmail.com",
    location: "Islamabad",
    profileImge: "https://media.istockphoto.com/id/1572396743/photo/business-man-smile-and-style-portrait-in-studio-for-corporate-or-ceo-fashion-while-happy-face.webp?a=1&b=1&s=612x612&w=0&k=20&c=B_bPe7hoyPrtYD73VnPbMQ24Y5xwvTA4CTc0DqMRADU=",
    events: 2,
  },
  {
    fullName: "Bilal Farooq",
    email: "bilal.farooq@gmail.com",
    location: "Karachi",
    profileImge: "https://media.istockphoto.com/id/2012561866/photo/senior-man-in-hiking-trail-poses-with-broad-smile-in-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=qSS16ZYjnDjcblINdw0_XVrZFwDtgsU0lK3USZ8VK-M=",
    events: 4,
  },
  {
    fullName: "Fatima Noor",
    email: "fatima.noor@gmail.com",
    location: "Peshawar",
    profileImge: "https://media.istockphoto.com/id/1442772282/photo/front-view-portrait-of-a-modern-man-standing-with-arms-crossed-looking-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Af9TXe2LbWLRCx4EfhHyEOSawU9W6cDhx1cxzatwiko=",
    events: 6,
  },
  // Add more users as needed...
];


export default function UsersComponent() {
  return (
    <div className="min-h-screen my-10 mx-10">
      <div className="flex justify-between my-5 font-bold text-3xl">
        <h1>Users</h1>
        </div>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader className="bg-slate-500">
          <TableRow >
            <TableHead className="text-white">Profile Image</TableHead>
            <TableHead className="text-white">Full Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Location</TableHead>
            <TableHead className="text-white">Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="">
                <Image
                  src={user.profileImge}
                  width={100}  // Set the appropriate width
                  height={100}
                  className="rounded-full" // Set the appropriate height
                  alt={user.fullName} // Add alt text for accessibility
                />
              </TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="">{user.location}</TableCell>
              <TableCell className="">{user.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
