import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link'; // Use Next.js's Link for navigation

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Tabs defaultValue="dashbord" className="w-full">
          <TabsList className="w-full py-10 bg-slate-400 text-white">
            <TabsTrigger value="dashbord">
              <Link href="/adimn/dashbord">Dashbord</Link>
            </TabsTrigger>
            <TabsTrigger value="users">
              <Link href="/adimn/users">Users</Link>
            </TabsTrigger>
            <TabsTrigger value="categories">
              <Link href="/adimn/categories">Categories</Link>
            </TabsTrigger>
            <TabsTrigger value="events">
              <Link href="/adimn/events">Events</Link>
            </TabsTrigger>
            <TabsTrigger value="subcategories">
              <Link href="/adimn/subcategories">Subcategories</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashbord">{children}</TabsContent>
          <TabsContent value="users">{children}</TabsContent>
          <TabsContent value="categories">{children}</TabsContent>
          <TabsContent value="events">{children}</TabsContent>
          <TabsContent value="subcategories">{children}</TabsContent>
        </Tabs>
      </body>
    </html>
  );
}
