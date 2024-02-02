import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppNavBar from '@/app/_components/layout/AppNavBar';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Thorndon Club',
    description: 'The Thorndon Club website',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppNavBar />
                <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-12">
                    {children}
                </main>
            </body>
        </html>
    );
}
