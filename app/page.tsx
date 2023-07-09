import Image from "next/image";

import PostList from "@/domains/home/components/postList";

import styles from "./page.module.css";

async function getData() {
  const res = await fetch(
    "http://localhost:5000/api/posts/pagination?page=1&sort=-createdAt&position=ALL&type=0&isClosed=false",
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <PostList postList={data} />
    </main>
  );
}
