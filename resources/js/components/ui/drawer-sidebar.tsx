import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export function Drawer({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('drawer', className)} {...props} />
}

export function DrawerToggle({
    id,
    className,
    ...props
}: ComponentProps<'input'>) {
    return (
        <input
            id={id}
            type="checkbox"
            className={cn('drawer-toggle', className)}
            {...props}
        />
    )
}

export function DrawerContent({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('drawer-content', className)} {...props} />
}

export function DrawerSide({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            className={cn('drawer-side overflow-visible', className)}
            {...props}
        />
    )
}

export function DrawerOverlay({
    drawerId,
    className,
    ...props
}: ComponentProps<'label'> & { drawerId: string }) {
    return (
        <label
            htmlFor={drawerId}
            aria-label="close sidebar"
            className={cn('drawer-overlay', className)}
            {...props}
        />
    )
}
