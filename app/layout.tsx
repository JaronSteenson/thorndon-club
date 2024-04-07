import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/app/_components/NavBar';
import { ReactNode } from 'react';
import { siteNameShort, siteNameVeryLong } from '@/app/globals';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteNameShort,
    description: siteNameVeryLong,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                <main>{children}</main>
            </body>
        </html>
    );
}
