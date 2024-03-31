export default function GoogleMapIframe({ height }: { height: number }) {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.647185659912!2d174.777004875996!3d-41.27301723954758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38ae25f0683081%3A0x69e907e67977e20c!2sThorndon%20Tennis%20%26%20Squash%20Club!5e0!3m2!1sen!2snz!4v1711845523421!5m2!1sen!2snz"
            width="400"
            height={height}
            style={{ border: 'none', overflow: 'hidden', maxWidth: '85vw' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
}
