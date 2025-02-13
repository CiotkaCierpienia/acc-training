import { flotiqApiClient } from "@/flotiq-api-client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContent from '@/app/_components/BlogContent';
import {getTranslatedField} from "@/app/_lib/helpers";

export default async function PostPage({ params }) {
  const { slug, lang } = await params;
  const content = await flotiqApiClient.content.blogpost.list({
    limit: 1,
    filters: { slug: { type: "equals", filter: slug } },
    hydrate: 1,
  });
  if (!content?.data?.[0]) {
    return notFound();
  }
  const blogpost = content.data[0];
  return (
    <div>
      <Link href={`/${lang}/posts`} className="text-blue-500 hover:underline mb-2 inline-block">
        ← Back to list
      </Link>
      <h1 className="text-4xl font-bold mb-2">{getTranslatedField(blogpost, 'title', lang)}</h1>
      <div className="flex gap-4 my-2">
        {blogpost.headerImage?.length ? (
          <Image
            alt={blogpost.headerImage[0].alt || ""}
            src={flotiqApiClient.helpers.getMediaUrl(blogpost.headerImage[0])}
            width={100}
            height={100}
          />
        ) : null}
        <p>{getTranslatedField(blogpost, 'excerpt', lang)}</p>
      </div>
      <div>
        <BlogContent content={getTranslatedField(blogpost, 'content', lang)} />
      </div>
    </div>
  );
}
