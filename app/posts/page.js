import { flotiqApiClient } from '@/flotiq-api-client';
import Link from 'next/link';
import Image from 'next/image';

export default async function Posts({ searchParams }) {
  const { page = '1' } = await searchParams;

  const posts =
    (
      await flotiqApiClient.BlogpostAPI.list({
        limit: 10,
        page: +page,
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
                href={`/post/${post.slug}`}
                prefetch
              />
              {post.headerImage?.[0] && (
                <Image
                  src={`https://api.flotiq.com${post.headerImage?.[0].url}`}
                  height={400}
                  width={400}
                  alt={post.headerImage?.[0].alt || post.title}
                />
              )}
              <div>{post.title}</div>
            </div>


          </div>
        ))}
      </div>
    </>
  )
}
