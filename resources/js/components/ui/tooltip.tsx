import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const tooltipVariants = cva('tooltip', {
    variants: {
        color: {
            neutral: 'btn-neutral',
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            accent: 'btn-accent',
            info: 'btn-info',
            success: 'btn-success',
            warning: 'btn-warning',
            error: 'btn-error',
        },
        placement: {
            top: 'tooltip-top',
            bottom: 'tooltip-bottom',
            left: 'tooltip-left',
            right: 'tooltip-right',
        },
        modifier: {
            open: 'tooltip-open',
        },
    },
});

export function Tooltip({
    text,
    color,
    placement,
    modifier,
    className,
}: ComponentProps<'div'> &
    VariantProps<typeof tooltipVariants> & { text: string }) {
    return (
        <div
            className={cn(
                tooltipVariants({
                    color,
                    placement,
                    modifier,
                    className,
                }),
            )}
            data-tip={text}
        />
    );
}
