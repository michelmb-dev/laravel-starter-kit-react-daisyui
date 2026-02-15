import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const collapseVariants = cva('collapse', {
    variants: {
        icon: {
            arrow: 'collapse-arrow',
            plus: 'collapse-plus',
        },
        action: {
            open: 'collapse-open',
            close: 'collapse-close',
        },
    },
})

export function Collapse({
    icon,
    action,
    className,
    ...props
}: ComponentProps<'div'> & VariantProps<typeof collapseVariants>) {
    return (
        <div
            data-slot="collapse"
            tabIndex={0}
            className={cn(
                'border border-base-300 bg-base-100',
                collapseVariants({ icon, action, className }),
            )}
            {...props}
        />
    )
}

export function CollapseTitle({ ...props }: ComponentProps<'span'>) {
    return (
        <span
            data-slot="collapse-title"
            className="collapse-title font-semibold"
            {...props}
        ></span>
    )
}

export function CollapseContent({ ...props }: ComponentProps<'p'>) {
    return (
        <p
            data-slot="collapse-content"
            className="collapse-content text-sm"
            {...props}
        ></p>
    )
}
