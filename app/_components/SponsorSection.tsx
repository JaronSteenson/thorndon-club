import Image from 'next/image';
import ardexLogo from '@/public/images/logos/ardex-logo.svg';
import dataCraftLogo from '@/public/images/logos/data-craft-logo.svg';
import fourWindsLogo from '@/public/images/logos/four-winds-logo-60x202.png';
import gazleyMotorsLogo from '@/public/images/logos/gazley-motors-logo-60x109.png';
import grassRootsTrustLogo from '@/public/images/logos/grassroots-trust-logo-60x210.png';
import grayleyPlasticsLogo from '@/public/images/logos/grayley-plastics-logo-60x151.png';
import levcoLogo from '@/public/images/logos/levco-logo.png';
import newWorldLogo from '@/public/images/logos/new-world-thorndon-logo-60x245.png';
import nzctLogo from '@/public/images/logos/nzct-logo.svg';
import oneFoundationLogo from '@/public/images/logos/one-foundation-logo-60x122.png';
import pelorusTrustLogo from '@/public/images/logos/pelorus-trust-logo.svg';
import pubCharityLogo from '@/public/images/logos/pub-charity-logo-60x108.png';
import sullivanConsultingLogo from '@/public/images/logos/sullivan-consulting-logo-60x254.png';
import tabLogo from '@/public/images/logos/tab-logo-60x129.png';
import theLionFoundationLogo from '@/public/images/logos/the-lion-foundation-logo-60x232.png';
import { ReactNode } from 'react';

export default function SponsorSection() {
    return (
        <div className="sponsors-sections">
            <section className="pt-6">
                <h2 className="text-4xl text-neutral-700">Our sponsors</h2>
                <Row>
                    <ImageLink
                        className="rounded"
                        main
                        href="https://www.ardex.co.nz"
                        src={ardexLogo}
                        alt="Ardex logo"
                    />
                </Row>
                <Row>
                    <ImageLink
                        className="rounded"
                        href="https://gazley.com/"
                        src={gazleyMotorsLogo}
                        alt="Gazley Motors logo"
                    />
                    <ImageLink
                        className="rounded"
                        href="https://datacraft.nz/"
                        src={dataCraftLogo}
                        alt="DataCraft logo"
                    />
                    <ImageLink
                        href="https://www.newworld.co.nz/lower-north-island/wellington/thorndon"
                        src={newWorldLogo}
                        alt="New World Thorndon logo"
                    />
                    <ImageLink
                        className="bg-gray-600 p-3 rounded"
                        href="https://www.levco.co.nz"
                        src={levcoLogo}
                        alt="Levco logo"
                    />
                    <ImageLink
                        href="https://www.graleyplastics.co.nz/"
                        src={grayleyPlasticsLogo}
                        alt="Grayley Plastics logo"
                    />
                    <ImageLink
                        href="https://sullivanconsulting.co.nz/"
                        src={sullivanConsultingLogo}
                        alt="Sullivan Consulting logo"
                    />
                </Row>
            </section>
            <section className="pt-24">
                <h2 className="text-4xl text-neutral-700">Our funders</h2>
                <Row>
                    <ImageLink
                        href="https://www.pelorustrust.net.nz/"
                        src={pelorusTrustLogo}
                        alt="Pelourus Trust logo"
                    />
                    <ImageLink href="https://www.tabnz.org/" src={tabLogo} alt="TAB logo" />
                    <ImageLink
                        className="bg-black p-1.5 rounded"
                        href="https://www.nzct.org.nz/"
                        src={nzctLogo}
                        alt="nzct logo"
                    />
                    <ImageLink
                        href="https://lionfoundation.nz/"
                        src={theLionFoundationLogo}
                        alt="The Lion Foundation logo"
                    />
                    <ImageLink
                        href="https://www.fourwindsfoundation.co.nz/"
                        src={fourWindsLogo}
                        alt="Four Winds logo"
                    />
                    <ImageLink
                        className="bg-gray-700 p-1.5 rounded"
                        href="https://onefoundation.nz/"
                        src={oneFoundationLogo}
                        alt="One Foundation logo"
                    />
                    <ImageLink
                        href="https://www.grassrootstrust.co.nz/"
                        src={grassRootsTrustLogo}
                        alt="Grassroots trust logo"
                    />
                    <ImageLink
                        className="bg-black p-1.5 rounded"
                        href="https://www.pubcharitylimited.org.nz/"
                        src={pubCharityLogo}
                        alt="Pub Charity logo"
                    />
                </Row>
            </section>
        </div>
    );
}

interface RowProps {
    children: ReactNode;
}

function Row({ children }: RowProps) {
    return <div className="flex flex-wrap justify-center items-center gap-6">{children}</div>;
}

interface ImageLinkProps {
    className?: string;
    href: string;
    src: any;
    alt: string;
    main?: boolean;
}

function ImageLink({ className = undefined, main = undefined, href, src, alt }: ImageLinkProps) {
    return (
        <a className={className} href={href} target="_blank" rel="noopener">
            <Image src={src} alt={alt} height={main ? 140 : 60} loading="lazy" />
        </a>
    );
}
