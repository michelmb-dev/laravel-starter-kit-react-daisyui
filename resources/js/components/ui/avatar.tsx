import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

const avatarVariants = cva('avatar', {
    variants: {
        indicator: {
            online: 'avatar-online',
            offline: 'avatar-offline',
        },
        placeholder: {
            default: 'avatar-placeholder',
            online: 'avatar-placeholder avatar-online',
            offline: 'avatar-placeholder avatar-offline',
        },
    },
});

export function Avatar({
    className,
    indicator,
    placeholder,
    ...props
}: ComponentProps<'div'> & VariantProps<typeof avatarVariants>) {
    return (
        <div
            className={cn(
                avatarVariants({
                    indicator,
                    className,
                    placeholder,
                }),
            )}
            {...props}
        />
    );
}
