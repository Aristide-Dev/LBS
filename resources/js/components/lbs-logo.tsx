interface LBSLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'full' | 'icon';
}

const sizes = {
    sm: { icon: 56, full: 120 },
    md: { icon: 80, full: 200 },
    lg: { icon: 120, full: 300 },
    xl: { icon: 160, full: 400 },
};

export default function LBSLogo({ className = '', size = 'md', variant = 'full' }: LBSLogoProps) {
    const dimensions = sizes[size];
    const width = variant === 'full' ? dimensions.full : dimensions.icon;
    const height = variant === 'full' ? dimensions.full : dimensions.icon;

    return (
        <img
            src="/web-app-manifest-512x512.png"
            alt="LOURA BUNKER SERVICES"
            width={width}
            height={height}
            className={className}
        />
    );
}

// Composant favicon/icon pour les petits espaces
export function LBSIcon({ className = '', size = 32 }: { className?: string; size?: number }) {
    return (
        <img
            src="/favicon.svg"
            alt="LBS"
            width={size}
            height={size}
            className={className}
        />
    );
}

