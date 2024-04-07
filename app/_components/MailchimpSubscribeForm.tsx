import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export default function MobileLaMailchimpSubscribeForm() {
    return (
        <>
            <form
                className="flex flex-col flex-wrap gap-6 w-full"
                action="https://thorndonclub.us7.list-manage.com/subscribe/post?u=d6baf37078f25e832e9c4f904&id=208a4ee0e4"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
            >
                <h3 className="text-xs text-center">Subscribe to our mailing list</h3>
                <InputGroup>
                    <Label>
                        Email Address <span>*</span>
                    </Label>
                    <Input type="email" required name="EMAIL" />
                </InputGroup>
                <InputGroup>
                    <Label>
                        Full Name <span>*</span>
                    </Label>
                    <Input type="text" required name="FNAME" />
                </InputGroup>
                <InputGroup>
                    <Label>
                        Name to be printed <span>*</span>
                    </Label>
                    <Input type="text" required name="MMERGE3" />
                </InputGroup>
                <InputGroup>
                    <Label tag="div">Subscribe to</Label>
                    <InlineLabel>
                        <input type="checkbox" value="1" name="group[72381][1]" />
                        <span>Tennis updates</span>
                    </InlineLabel>
                    <InlineLabel>
                        <input type="checkbox" value="2" name="group[72381][2]" />
                        <span>Squash updates</span>
                    </InlineLabel>
                    <InlineLabel>
                        <input type="checkbox" value="4" name="group[72381][4]" />
                        <span>Events</span>
                    </InlineLabel>
                </InputGroup>
                <InputGroup>
                    <Label tag="div">Email format</Label>
                    <InlineLabel>
                        <input type="radio" required value="html" name="EMAILTYPE" />
                        <span>Html</span>
                    </InlineLabel>
                    <InlineLabel>
                        <input type="radio" required value="text" name="EMAILTYPE" />
                        <span>Text</span>
                    </InlineLabel>
                </InputGroup>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_d6baf37078f25e832e9c4f904_208a4ee0e4" tabIndex={-1} />
                </div>
                <input className="button-primary" type="submit" value="Subscribe" name="subscribe" />
            </form>
        </>
    );
}

function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <input
            className="rounded h-8 p-2 outline-0 focus:outline focus:outline-2 focus:outline-primary-500"
            {...props}
        />
    );
}

function InputGroup({ children }: { children: ReactNode }) {
    return <div className="flex flex-col justify-betwee gap-1">{children}</div>;
}

function Label({ children, tag = 'label' }: { children: ReactNode; tag?: 'label' | 'div' }) {
    const Tag = tag;
    return <Tag className="font-semibold">{children}</Tag>;
}

function InlineLabel({ children, tag = 'label' }: { children: ReactNode; tag?: 'label' | 'div' }) {
    const Tag = tag;
    return (
        <Tag className="flex gap-3 items-center">
            <>{children}</>
        </Tag>
    );
}
