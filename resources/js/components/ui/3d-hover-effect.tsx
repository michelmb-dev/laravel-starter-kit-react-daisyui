import { cn } from '@/lib/utils'
import type { ComponentProps, PropsWithChildren } from 'react'

export function HoverEffect({
    className,
    children,
    ...props
}: PropsWithChildren<ComponentProps<'div'>>) {
    return (
        <div className={cn('hover-3d', className)} {...props}>
            {children}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
