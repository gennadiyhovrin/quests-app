"use client";

import Card from "@/components/Card";
import CategoryMenu from "@/components/CategoryMenu";
import { Posts } from "@/data/types";
import { useState } from "react";

export default function Home({ posts }: { posts: Posts }) {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <p className="text-lg leading-7 text-orange-500">Quests in Kyiv </p>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Choose a topic{" "}
          </h1>
        </div>
        <CategoryMenu activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="container py-12">
          <div className=" flex flex-wrap gap-9">
            {(activeCategory == "all" ? posts : posts.filter((post) => post.type === activeCategory)).map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
