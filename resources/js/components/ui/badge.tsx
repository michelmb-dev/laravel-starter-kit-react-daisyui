import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

const badgeVariants = cva('badge', {
    variants: {
        color: {
            neutral: 'badge-neutral',
            primary: 'badge-primary',
            secondary: 'badge-secondary',
            accent: 'badge-accent',
            info: 'badge-info',
            success: 'badge-success',
            warning: 'badge-warning',
            error: 'badge-error',
        },
        style: {
            outline: 'badge-outline',
            dash: 'badge-dash',
            soft: 'badge-soft',
            ghost: 'badge-ghost',
        },
        size: {
            xs: 'badge-xs',
            sm: 'badge-sm',
            lg: 'badge-lg',
            xl: 'badge-xl',
        },
    },
})

export function Badge({
    className,
    color,
    style,
    size,
    ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
    return (
        <span
            className={cn(
                badgeVariants({
                    style,
                    color,
                    size,
                    className,
                }),
            )}
            {...props}
        />
    )
}
