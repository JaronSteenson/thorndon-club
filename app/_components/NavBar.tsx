'use client';

import { helloClubUrl, merchStoreLink } from '@/app/globals';
import helloClubLogo from '@/public/images/logos/hello-club-logo.svg';
import externalLinkIcon from '@/public/images/icons/external-link.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const mainPageRoutes = {
    Tennis: 'tennis',
    Squash: 'squash',
    'Club hire': 'club-hire',
    Memberships: 'memberships',
    'Contact us': 'contact-us',
};

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((menuOpen) => !menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <nav className="navBar">
                <div className="items-center md:flex md:flex-col md:items-start md:justify-between w-full p-6">
                    <div className="flex items-center justify-between flex-wrap h-full w-full">
                        <div className="flex items-center gap-6">
                            <Link
                                className="text-xl text-black font-semibold text-center uppercase items-center justify-between gap-2"
                                href="/"
                                onClick={closeMenu}
                            >
                                <div>Thorndon</div>
                                <div className="text-sm">Tennis and Squash Club</div>
                            </Link>
                        </div>
                        <div className="flex justify-between flex-wrap gap-3">
                            <div className="flex items-center justify-end gap-3">
                                <span className="hidden sm:hidden md:hidden lg:flex xl:flex items-center justify-end gap-4 xs:gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-12">
                                    <Links onItemClick={closeMenu} />
                                </span>
                            </div>
                            <MobileLauncher onClick={toggleMenu} menuOpen={menuOpen} />
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="m-0 p-6 gap-6 flex sm:flex md:flex lg:hidden xl:hiddenx flex-col w-full text-center">
                        <Links onItemClick={closeMenu} />
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

function MobileLauncher({ menuOpen, onClick }: MobileLauncherProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-8 h-8 flex sm:flex md:fle lg:hidden xl:hiddenx justify-center items-center"
            aria-label="Toggle navigation"
        >
            {!menuOpen && (
                <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
            {menuOpen && (
                <svg
                    className="hs-collapse-open:block flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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

function Links({ onItemClick }: { onItemClick: () => void }) {
    return (
        <>
            {Object.entries(mainPageRoutes).map(([children, href]) => (
                <Link key={href} className="text-md font-medium md:py-1" href={href} onClick={onItemClick}>
                    {children}
                </Link>
            ))}
            <a className="text-md font-medium md:py-1" rel="noopener" href={merchStoreLink}>
                <Image
                    className="inline pr-1 pb-0.5"
                    src={externalLinkIcon}
                    height="24"
                    alt="External link"
                />
                Uniforms
            </a>
            <a className="button-neutral text-md" rel="noopener" href={helloClubUrl}>
                <Image className="inline pr-2" src={helloClubLogo} height="24" alt="Hello Club logo" />
                Book a court
            </a>
        </>
    );
}
