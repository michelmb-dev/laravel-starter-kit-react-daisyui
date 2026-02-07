import type { LucideIcon, LucideProps } from 'lucide-react';

interface IconProps {
    iconNode?: LucideIcon | null;
    className?: string;
}

export function Icon({
    iconNode: IconComponent,
    className,
    ...props
}: IconProps & LucideProps) {
    if (!IconComponent) {
        return null;
    }

    return <IconComponent className={className} {...props} />;
}
