import { flotiqApiClient } from '@/flotiq-api-client';

export default async function Nav() {
  const content = await flotiqApiClient.MenuAPI.list({
    limit: 1,
  });
  const menu = content.data[0];
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Logo
          </div>
          <nav className="hidden md:flex space-x-4">
            {menu.menu.map((item) => (
              <span key={item.link_name}>
                <a href={item.link} target={item.target}>{item.link_name}</a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
