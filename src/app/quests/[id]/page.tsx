import { getPost } from "@/actions/actions";
import QuestDetails from "@/components/QuestDetails";

export default async function Page({ params }: { params: { id: number } }) {
  const post = await getPost(params.id);

  return <QuestDetails post={post} />;
}
