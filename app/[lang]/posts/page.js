import { flotiqApiClient } from '@/flotiq-api-client';
import Link from 'next/link';
import Image from 'next/image';
import {getTranslatedField} from "@/app/_lib/helpers";

export default async function Posts({ searchParams, params }) {
  const { page = '1' } = await searchParams;
  const { lang } = await params;

  const posts =
    (
      await flotiqApiClient.content.blogpost.list({
        limit: 10,
        page: +page,
        hydrate: 1,
      })
    ).data || [];

  return (
    <>
      <div className="text-2xl mb-6">Page: {page}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {posts.map((post) => (
          <div key={post.id}>
            <div
              className="relative p-6 flex flex-col items-center gap-4 bg-gray-200 shadow-sm rounded-md hover:shadow-md">
              <Link
                className="absolute top-0 left-0 h-full w-full"
                href={`/${lang}/post/${post.slug}`}
                prefetch
              />
              {post.headerImage?.[0] && (
                <Image
                  src={flotiqApiClient.helpers.getMediaUrl(post.headerImage[0])}
                  height={400}
                  width={400}
                  alt={post.headerImage?.[0].alt || post.title}
                />
              )}
              <div>{getTranslatedField(post, 'title', lang)}</div>
            </div>


          </div>
        ))}
      </div>
    </>
  )
}
