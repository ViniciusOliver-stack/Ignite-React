import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { Sidebar } from "@/components/Sidebar";
import { posts } from "@/utils/posts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter}`}>
      <Header />

      <div className="max-w-[1120px] my-8 mx-auto px-4 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />

        <main className="flex flex-col gap-6">
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
