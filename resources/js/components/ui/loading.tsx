import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

const loadingVariants = cva('loading', {
    variants: {
        style: {
            spinner: 'loading-spinner',
            dots: 'loading-dots',
            ring: 'loading-ring',
            ball: 'loading-ball',
            bars: 'loading-bars',
            infinity: 'loading-infinity',
        },
        size: {
            xs: 'loading-xs',
            sm: 'loading-sm',
            lg: 'loading-lg',
            xl: 'loading-xl',
        },
    },
})

export function Loading({
    className,
    style,
    size,
    ...props
}: ComponentProps<'span'> & VariantProps<typeof loadingVariants>) {
    return (
        <span
            className={cn(
                loadingVariants({
                    style,
                    size,
                    className,
                }),
            )}
            {...props}
        />
    )
}
