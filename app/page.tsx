'use client';

import MailchimpSubscribeForm from '@/app/_components/MailchimpSubscribeForm';
import SponsorSection from '@/app/_components/SponsorSection';
import JoinNowButton from '@/app/_components/JoinNowButton';
import HomePageSlideShow from '@/app/_components/HomePageSlideShow';
import FacebookIframe from '@/app/_components/FacebookIframe';
import GoogleMapIframe from '@/app/_components/GoogleMapIFrame';
import Image from 'next/image';
import logo from '@/public/images/logos/thorndon-club-logo-200x200.png';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section className="">
                <Image className="bg-white rounded p-1" src={logo} width={200} height={200} alt="logo" />
                <p className="text-xl text-center px-6">
                    Tennis, Squash and more just a stones throw from the Wellington cbd.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <JoinNowButton />
                    <Link className="button-secondary w-48" href="memberships">
                        View memberships
                    </Link>
                </div>
            </section>
            <HomePageSlideShow />
            <div className="flex flex-wrap gap-12 items-start justify-center">
                <section className="iframe-card">
                    <h2>Find us</h2>
                    <GoogleMapIframe height={400} />
                </section>
                <section className="iframe-card">
                    <h2>Follow us</h2>
                    <FacebookIframe height={400} />
                </section>
            </div>
            <section className="card-double">
                <h2>Keep in the loop</h2>
                <MailchimpSubscribeForm />
            </section>
            <SponsorSection />
        </>
    );
}
