import Image from 'next/image';

interface Props {
    thumb: any;
    full: any;
    alt: string;
}

export default function ExpandableImage({ thumb, full, alt }: Props) {
    return <Image className="bg-gray-100 rounded-xl" src={thumb} alt={alt} height={200} />;
}
