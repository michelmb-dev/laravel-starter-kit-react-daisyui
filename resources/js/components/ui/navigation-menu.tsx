import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const menuVariants = cva('menu', {
    variants: {},
});

export function NavigationMenu({
    className,
    ...props
}: ComponentProps<'ul'> & VariantProps<typeof menuVariants>) {
    return (
        <ul
            className={cn(
                menuVariants({
                    className,
                }),
            )}
            {...props}
        />
    );
}

export function NavigationMenuGroup({
    label,
    children,
    className,
    ...props
}: ComponentProps<'div'> & { label: string }) {
    return (
        <div {...props}>
            <label
                className={cn(
                    'label-secondary label-outline label text-xs is-drawer-close:hidden',
                    className,
                )}
            >
                {label}
            </label>
            {children}
        </div>
    );
}

export function NavigationMenuItem({ ...props }: ComponentProps<'li'>) {
    return <li {...props} />;
}
