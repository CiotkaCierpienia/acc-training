import { flotiqApiClient } from '@/flotiq-api-client';
import Sections from '@/app/_components/Sections';

export default async function Home() {
  const content = await flotiqApiClient.PageAPI.list({
    limit: 1,
    filters: JSON.stringify({ slug: { type: "equals", filter: '/' } }),
    hydrate: 2,
  });
  const page = content.data[0];
  return (
    <div>
      <Sections sections={page.sections} />
    </div>
  );
}
