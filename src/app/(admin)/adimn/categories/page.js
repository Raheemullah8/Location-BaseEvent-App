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
import { Button } from "@/components/ui/button"
import { AddCat } from "@/components/ui/addcat/addcat";


const cat = [
  {
    title: "Cycling Adventure",
    thumbnail: "https://images.pexels.com/photos/28005837/pexels-photo-28005837/free-photo-of-man-on-bike-trip-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Join us for a thrilling cycling adventure in the mountains.",
  },
 
  // Add more category as needed...
];



export default function categories() {
  return (
    <div className="min-h-screen my-10 mx-10">
      <div className="flex justify-between my-5 font-bold text-3xl">
        <h1>Add-Category</h1>
       <AddCat/>

        
      </div>
      <Table>
        <TableCaption>A list of your recent Events.</TableCaption>
        <TableHeader className="bg-slate-500">
          <TableRow >
            <TableHead className="text-white">Thumbnail</TableHead>
            <TableHead className="text-white">title</TableHead>
            <TableHead className="text-white">Description</TableHead>
        
          </TableRow>
        </TableHeader>
        <TableBody>
          {cat.map((cate) => (
            <TableRow key={cate.title}>
              <TableCell className="">
                <Image
                  src={cate.thumbnail}
                  width={100}  // Set the appropriate width
                  height={100}
                  className="rounded-full" // Set the appropriate height
                  alt={cate.title} // Add alt text for accessibility
                />
              </TableCell>
              <TableCell>{cate.title}</TableCell>
              <TableCell>{cate.description}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
