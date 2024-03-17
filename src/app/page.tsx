import { getPosts } from "@/actions/actions";
import Main from "./Main";

export default async function Page() {
  const posts = await getPosts();

  return <Main posts={posts} />;
}
