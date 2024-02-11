import ardexLogo from '@/public/images/ardex-logo.svg';
import dataCraftLogo from '@/public/images/data-craft-logo.svg';
import pelorusTrustLogo from '@/public/images/pelorus-trust-logo.svg';
import nzctLogo from '@/public//images/nzct-logo.svg';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function SponsorSection() {
    return (
        <>
            <section>
                <h2 className="text-3xl">Our sponsors</h2>
                <Row>
                    <ImageLink
                        className="bg-white rounded"
                        href="https://www.ardex.co.nz"
                        src={ardexLogo}
                        alt="Ardex logo"
                    />
                </Row>
                <Row>
                    <ImageLink
                        className="bg-white rounded"
                        href="https://datacraft.nz/"
                        src={dataCraftLogo}
                        height={60}
                        alt="DataCraft logo"
                    />
                    <ImageLink
                        href="https://www.newworld.co.nz/lower-north-island/wellington/thorndon"
                        src="images/new-world-thorndon-logo-60x245.png"
                        height={60}
                        width={245}
                        alt="New World Thorndon logo"
                    />
                    <ImageLink
                        className="bg-gray-600 p-3 rounded"
                        href="https://www.levco.co.nz"
                        src="images/levco-logo.png"
                        height={60}
                        width={143}
                        alt="Levco logo"
                    />
                    <ImageLink
                        href="https://www.graleyplastics.co.nz/"
                        src="images/grayley-plastics-logo-60x151.png"
                        height={60}
                        width={151}
                        alt="Grayley Plastics logo"
                    />
                    <ImageLink
                        href="https://sullivanconsulting.co.nz/"
                        src="images/sullivan-consulting-logo-60x254.png"
                        height={60}
                        width={254}
                        alt="Sullivan Consulting logo"
                    />
                </Row>
            </section>
            <section className="pt-6">
                <h2 className="text-3xl">Our funders</h2>
                <Row>
                    <ImageLink
                        href="https://www.pelorustrust.net.nz/"
                        src={pelorusTrustLogo}
                        height={60}
                        alt="Pelourus Trust logo"
                    />
                    <ImageLink
                        href="https://www.tabnz.org/"
                        src="images/tab-logo-60x129.png"
                        height={60}
                        width={129}
                        alt="TAB logo"
                    />
                    <ImageLink
                        className="bg-black p-1.5 rounded"
                        href="https://www.nzct.org.nz/"
                        src={nzctLogo}
                        height={60}
                        alt="nzct logo"
                    />
                    <ImageLink
                        href="https://lionfoundation.nz/"
                        src="images/the-lion-foundation-logo-60x232.png"
                        height={60}
                        width={232}
                        alt="The Lion Foundation logo"
                    />
                    <ImageLink
                        href="https://www.fourwindsfoundation.co.nz/"
                        src="images/four-winds-logo-60x202.png"
                        height={60}
                        width={202}
                        alt="Four Winds logo"
                    />
                    <ImageLink
                        className="bg-gray-700 p-1.5 rounded"
                        href="https://onefoundation.nz/"
                        src="images/one-foundation-logo-60x122.png"
                        height={60}
                        width={122}
                        alt="One Foundation logo"
                    />
                    <ImageLink
                        href="https://www.grassrootstrust.co.nz/"
                        src="images/grassroots-trust-logo-60x210.png"
                        height={60}
                        width={210}
                        alt="Grassroots trust logo"
                    />
                    <ImageLink
                        className="bg-black p-1.5 rounded"
                        href="https://www.pubcharitylimited.org.nz/"
                        src="images/pub-charity-logo-60x108.png"
                        height={60}
                        width={108}
                        alt="Pub Charity Consulting logo"
                    />
                </Row>
            </section>
        </>
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
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

function ImageLink({
    className = undefined,
    href,
    src,
    alt,
    width = undefined,
    height = undefined,
}: ImageLinkProps) {
    if (!className && !width) {
        className = 'bg-gray-100 rounded'; // Very cheap and simple loading skelly.
    }

    return (
        <a className={className} href={href} target="_blank" rel="noopener">
            <Image src={src} alt={alt} width={width} height={height} loading="lazy" />
        </a>
    );
}
