import { flotiqApiClient } from '@/flotiq-api-client';
import Link from "next/link";
import LanguageSwitcher from "@/app/_components/LanguageSwitcher";

export default async function Nav({ lang }) {
  const content = await flotiqApiClient.content.menu.list({
    limit: 1,
    hydrate: 1,
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
                <a href={item.link.replace('{lang}', lang)} target={item.target} className="text-gray-900">{item.link_name}</a>
              </span>
            ))}
            <LanguageSwitcher lang={lang} />
          </nav>
        </div>
      </div>
    </header>
  )
}
