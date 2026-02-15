import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps, ReactNode } from 'react'

const swapVariants = cva('swap', {
    variants: {
        style: {
            flip: 'swap-flip',
            rotate: 'swap-rotate',
        },
    },
})

export function Swap({
    className,
    style,
    swapOn,
    swapOff,
    ...props
}: ComponentProps<'label'> & {
    swapOn: ReactNode | string
    swapOff: ReactNode | string
} & VariantProps<typeof swapVariants>) {
    return (
        <label
            className={cn(
                swapVariants({
                    className,
                    style,
                }),
            )}
            {...props}
        >
            <input type="checkbox" />
            <div className="swap-on">{swapOn}</div>
            <div className="swap-off">{swapOff}</div>
        </label>
    )
}
