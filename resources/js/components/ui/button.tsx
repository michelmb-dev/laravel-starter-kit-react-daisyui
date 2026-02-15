import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export const buttonVariants = cva('btn', {
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
        style: {
            outline: 'btn-outline',
            dash: 'btn-dash',
            soft: 'btn-soft',
            ghost: 'btn-ghost',
            link: 'btn-link',
        },
        behavior: {
            active: 'btn-active',
            disabled: 'btn-disabled',
        },
        size: {
            xs: 'btn-xs',
            sm: 'btn-sm',
            lg: 'btn-lg',
            xl: 'btn-xl',
        },
        modifier: {
            wide: 'btn-wide', // More horizontal padding
            block: 'btn-block', // Full width
            square: 'btn-square', // 1:1 ratio
            circle: 'btn-circle', // 1:1 ratio with rounded corners
        },
    },
})

export function Button({
    className,
    color,
    style,
    behavior,
    size,
    modifier,
    ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
    return (
        <button
            className={cn(
                buttonVariants({
                    style,
                    color,
                    behavior,
                    size,
                    modifier,
                    className,
                }),
            )}
            {...props}
        />
    )
}
