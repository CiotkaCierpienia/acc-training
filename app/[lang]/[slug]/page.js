import { flotiqApiClient } from "@/flotiq-api-client";
import Link from "next/link";
import { notFound } from "next/navigation";
import Sections from '../../_components/Sections';

export default async function Page({ params }) {
  const { slug } = await params;
  const content = await flotiqApiClient.content.page.list({
    limit: 1,
    filters: { slug: { type: "equals", filter: slug } },
    hydrate: 2,
  });
  if (!content?.data?.[0]) {
    return notFound();
  }
  const page = content.data[0];
  return (
    <div>
      <Link href={`/public`} className="text-blue-500 hover:underline mb-2 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-4xl font-bold mb-2">{page.title}</h1>
      <Sections sections={page.sections} />
    </div>
  );
}
