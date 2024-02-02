'use client';

import { siteName, helloClubUrl } from '@/app/globals';
import helloClubLogo from '@/public/hello-club-logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const mainPageRoutes = {
    Squash: 'squash',
    Tennis: 'tennis',
    'Club hire': 'club-hire',
    Memberships: 'memberships',
    'Contact us': 'contact-us',
};

// @ts-ignore
const mainPageLinkProps = toRouteProps(mainPageRoutes);

function MobileLauncher(props: { onClick: () => void; menuOpen: boolean }) {
    return (
        <button
            onClick={props.onClick}
            type="button"
            className="w-8 h-8 flex justify-center items-center text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
        >
            {!props.menuOpen && (
                <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
            )}
            {props.menuOpen && (
                <svg
                    className="hs-collapse-open:block flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            )}
        </button>
    );
}

export default function AppNavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((menuOpen) => !menuOpen);
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav className="w-full">
                <div className="items-center md:flex md:flex-col md:items-start md:justify-between h-12 p-3 w-full bg-white dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="flex items-center justify-between flex-wrap h-full w-full">
                        <Link className="flex-none text-xl font-semibold" href="/" aria-label="Site name">
                            {siteName}
                        </Link>
                        <div className="flex justify-between flex-wrap gap-6">
                            <div className="hidden lg:flex xl:flex sm:hidden items-center justify-end gap-6">
                                <Links mainPageLinkProps={mainPageLinkProps} />
                            </div>
                            <a
                                className="flex items-center gap-2 font-medium text-gray-500 hover:text-blue-600 md:my-1 md:ps-1 dark:text-gray-400 dark:hover:text-blue-500"
                                href={helloClubUrl}
                            >
                                <Image src={helloClubLogo} width="24" height="24" alt="Hello Club login" />
                                <span>
                                    Book{' '}
                                    <span className="hidden sm:hidden md:inline lg:inline xl:inline">
                                        a court
                                    </span>
                                </span>
                            </a>
                            <div className="flex lg:hidden xl:hidden sm:flex md:flex">
                                <MobileLauncher onClick={toggleMenu} menuOpen={menuOpen} />
                            </div>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="bg-white m-0 p-6 gap-6 flex lg:hidden xl:hidden sm:flex md:flex flex-col w-full text-center">
                        <Links mainPageLinkProps={mainPageLinkProps} />
                    </div>
                )}
            </nav>
        </header>
    );
}

interface LinkProps {
    href: string;
    children: string;
}

function toRouteProps(pages: Record<string, string>): LinkProps[] {
    return Object.entries(pages).map(([children, href]) => {
        return {
            href,
            children,
        };
    });
}

function Links({ mainPageLinkProps }: { mainPageLinkProps: LinkProps[] }) {
    return (
        <>
            {mainPageLinkProps.map(({ href, children }) => (
                <Link key={href} className="font-medium text-blue-600 md:py-1 dark:text-blue-500" href={href}>
                    {children}
                </Link>
            ))}
        </>
    );
}
