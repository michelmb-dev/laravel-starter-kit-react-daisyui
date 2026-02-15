import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const dividerVariants = cva('divider', {
    variants: {
        direction: {
            horizontal: 'divider-horizontal',
            vertical: 'divider-vertical',
        },
        placement: {
            start: 'divider-start',
            end: 'divider-end',
        },
        color: {
            neutral: 'divider-neutral',
            primary: 'divider-primary',
            secondary: 'divider-secondary',
            accent: 'divider-accent',
            info: 'divider-info',
            success: 'divider-success',
            warning: 'divider-warning',
            error: 'divider-error',
        },
    },
    defaultVariants: {
        direction: 'vertical',
    },
})

export function Divider({
    label,
    direction,
    placement,
    color,
    className,
    ...props
}: ComponentProps<'span'> & { label?: string } & VariantProps<
        typeof dividerVariants
    >) {
    return (
        <span
            className={cn(
                dividerVariants({
                    direction,
                    placement,
                    color,
                    className,
                }),
            )}
            {...props}
        >
            {label}
        </span>
    )
}
