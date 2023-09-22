import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { Sidebar } from "@/components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter}`}>
      <Header />

      <div className="max-w-[1120px] my-8 mx-auto px grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />

        <Post />
      </div>
    </div>
  );
}
