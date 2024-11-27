import { flotiqApiClient } from "@/flotiq-api-client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContent from '@/app/_components/BlogContent';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const content = await flotiqApiClient.BlogpostAPI.list({
    limit: 1,
    filters: JSON.stringify({ slug: { type: "equals", filter: slug } }),
  });
  if (!content?.data?.[0]) {
    return notFound();
  }
  const blogpost = content.data[0];
  return (
    <div>
      <Link href={`/posts`} className="text-blue-500 hover:underline mb-2 inline-block">
        ← Back to list
      </Link>
      <h1 className="text-4xl font-bold mb-2">{blogpost.title}</h1>
      <div className="flex gap-4 my-2">
        {blogpost.headerImage?.length ? (
          <Image
            alt={blogpost.headerImage[0].alt || ""}
            src={`https://api.flotiq.com${blogpost.headerImage[0].url}`}
            width={100}
            height={100}
          />
        ) : null}
        <p>{blogpost.excerpt}</p>
      </div>
      <div>
        <BlogContent content={blogpost.content} />
      </div>
    </div>
  );
}
