import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export function Skeleton({ className, ...props }: ComponentProps<'span'>) {
    return <span className={cn('skeleton', className)} {...props} />
}
