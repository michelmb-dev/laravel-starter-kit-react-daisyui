import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';

const toggleVariants = cva('toggle', {
    variants: {
        color: {
            neutral: 'toggle-neutral',
            primary: 'toggle-primary',
            secondary: 'toggle-secondary',
            accent: 'toggle-accent',
            info: 'toggle-info',
            success: 'toggle-success',
            warning: 'toggle-warning',
            error: 'toggle-error',
        },
        size: {
            xs: 'toggle-xs',
            sm: 'toggle-sm',
            lg: 'toggle-lg',
            xl: 'toggle-xl',
        },
    },
});

export function Toggle({
    color,
    size,
    className,
    ...props
}: ComponentProps<'input'> & VariantProps<typeof toggleVariants>) {
    return (
        <input
            type="checkbox"
            className={cn(
                toggleVariants({
                    color,
                    size,
                    className,
                }),
            )}
            {...props}
        />
    );
}
