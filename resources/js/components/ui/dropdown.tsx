import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const dropdownVariants = cva('dropdown', {
    variants: {
        alignment: {
            start: 'dropdown-start',
            center: 'dropdown-center',
            end: 'dropdown-end',
        },
        placement: {
            top: 'dropdown-top',
            bottom: 'dropdown-bottom',
            left: 'dropdown-left',
            right: 'dropdown-right',
        },
        modifier: {
            hover: 'dropdown-hover',
            open: 'dropdown-open',
            close: 'dropdown-close',
        },
    },
    defaultVariants: {
        alignment: 'center',
        placement: 'bottom',
    },
})

export function Dropdown({
    className,
    alignment,
    placement,
    modifier,
    ...props
}: ComponentProps<'div'> & VariantProps<typeof dropdownVariants>) {
    return (
        <div
            className={cn(
                dropdownVariants({
                    alignment,
                    placement,
                    modifier,
                    className,
                }),
            )}
            {...props}
        />
    )
}

export function DropdownTrigger({
    className,
    alignment,
    placement,
    modifier,
    ...props
}: ComponentProps<'div'> & VariantProps<typeof dropdownVariants>) {
    return (
        <div
            tabIndex={0}
            role="button"
            className={cn(
                'btn',
                dropdownVariants({
                    alignment,
                    placement,
                    modifier,
                    className,
                }),
            )}
            {...props}
        />
    )
}

export function DropdownContent({ className, ...props }: ComponentProps<'ul'>) {
    return (
        <ul
            tabIndex={-1}
            className={cn(
                'dropdown-content menu z-1 w-full rounded-box bg-base-100 shadow-sm',
                className,
            )}
            {...props}
        />
    )
}

export function DropdownItem({ ...props }: ComponentProps<'li'>) {
    return <li {...props} />
}
