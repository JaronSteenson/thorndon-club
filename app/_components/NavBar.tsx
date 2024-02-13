'use client';

import { helloClubUrl } from '@/app/globals';
import helloClubLogo from '@/public/images/logos/hello-club-logo.svg';
import navBarLogo from '@/public/images/logos/nav-bar-logo-70x337.png';
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

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((menuOpen) => !menuOpen);
    return (
        <header className="card flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav className="w-full">
                <div className="items-center md:flex md:flex-col md:items-start md:justify-between p-3 w-full bg-white dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="flex items-center justify-between flex-wrap h-full w-full">
                        <div className="flex items-center gap-6">
                            <Link
                                className="text-xl font-semibold uppercase flex items-center justify-between gap-2"
                                href="/"
                                aria-label="Site name"
                            >
                                <Image
                                    className="hidden xs:hidden sm:inline md:inline lg:inline xl:inline"
                                    src={navBarLogo}
                                    height={50}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="flex justify-between flex-wrap gap-3">
                            <div className="hidden sm:hidden md:hidden lg:flex xl:flex items-center justify-end gap-10">
                                <Links mainPageLinkProps={mainPageLinkProps} />
                                <a className="button-secondary" href={helloClubUrl}>
                                    <Image
                                        className="hidden sm:inline md:inline lg:inline xl:inline pr-2"
                                        src={helloClubLogo}
                                        width="24"
                                        height="24"
                                        alt="Hello Club logo"
                                    />
                                    Book a court
                                </a>
                            </div>
                            <MobileLauncher onClick={toggleMenu} menuOpen={menuOpen} />
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="bg-white m-0 p-6 gap-6 flex sm:flex md:fle lg:hidden xl:hiddenx flex-col w-full text-center">
                        <Links mainPageLinkProps={mainPageLinkProps} />
                    </div>
                )}
            </nav>
        </header>
    );
}

interface MobileLauncherProps {
    onClick: () => void;
    menuOpen: boolean;
}

function MobileLauncher(props: MobileLauncherProps) {
    return (
        <button
            onClick={props.onClick}
            type="button"
            className="w-8 h-8 flex sm:flex md:fle lg:hidden xl:hiddenx justify-center items-center"
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
                <Link key={href} className="font-medium md:py-1" href={href}>
                    {children}
                </Link>
            ))}
        </>
    );
}
