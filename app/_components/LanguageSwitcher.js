'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function LanguageSwitcher({ lang }) {
    const pathname = usePathname()
    return (
        <span className="text-gray-900">
            <Link
                href={pathname?.replace('\/pl', '/en') || '/en'}
                className={lang === 'en' ? 'font-bold pointer-events-none' : ''}
                aria-disabled={lang === 'en'}
            >
                EN
            </Link>
            {' '}|{' '}
            <Link
                href={pathname?.replace('\/en', '/pl') || '/pl'}
                className={lang === 'pl' ? 'font-bold pointer-events-none' : ''}
                aria-disabled={lang === 'en'}
            >
                PL
            </Link>
        </span>
    );
}
