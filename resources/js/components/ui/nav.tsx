import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export function Nav({ className, ...props }: ComponentProps<'nav'>) {
    return <nav className={cn('navbar', className)} {...props} />
}

export function NavStart({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('navbar-start', className)} {...props} />
}

export function NavCenter({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('navbar-center', className)} {...props} />
}

export function NavEnd({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('navbar-end', className)} {...props} />
}
