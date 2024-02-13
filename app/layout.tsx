import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/app/_components/NavBar';
import { ReactNode } from 'react';
import { siteName, siteNameVeryLong } from '@/app/globals';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteName,
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
                <main className="flex min-h-screen flex-col items-center justify-center p-12 gap-12">
                    {children}
                </main>
            </body>
        </html>
    );
}
