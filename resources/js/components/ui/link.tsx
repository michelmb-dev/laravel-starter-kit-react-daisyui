import { cn } from '@/lib/utils'
import { type InertiaLinkProps, Link } from '@inertiajs/react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const linkVariants = cva('link', {
    variants: {
        underline: {
            hover: 'link-hover',
            none: 'no-underline',
        },
        color: {
            default: 'text-base-content',
            neutral: 'link-neutral',
            primary: 'link-primary',
            secondary: 'link-secondary',
            accent: 'link-accent',
            info: 'link-info',
            success: 'link-success',
            warning: 'link-warning',
            error: 'link-error',
        },
    },
    defaultVariants: {
        color: 'default',
    },
})

export function BaseLink({
    color,
    underline,
    className,
    ...props
}: ComponentProps<'a'> & VariantProps<typeof linkVariants>) {
    return (
        <a
            className={cn(linkVariants({ color, underline, className }))}
            {...props}
        />
    )
}

export function InertiaLink({
    color,
    underline,
    className,
    ...props
}: InertiaLinkProps & VariantProps<typeof linkVariants>) {
    return (
        <Link
            className={cn(linkVariants({ color, underline, className }))}
            {...props}
        />
    )
}
