import { cva, type VariantProps } from 'class-variance-authority'

import { Icon } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { CircleAlertIcon, CircleCheckIcon, InfoIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

const alertVariants = cva('alert', {
    variants: {
        color: {
            info: 'alert-info',
            success: 'alert-success',
            warning: 'alert-warning',
            error: 'alert-error',
        },
        style: {
            outline: 'alert-outline',
            dash: 'alert-dash',
            soft: 'alert-soft',
        },
        direction: {
            vertical: 'alert-vertical',
            horizontal: 'alert-horizontal',
        },
    },
})

export function Alert({
    children,
    className,
    color,
    style,
    ...props
}: ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
    return (
        <div
            role="alert"
            className={cn(
                alertVariants({
                    style,
                    color,
                    className,
                }),
            )}
            {...props}
        >
            {color === 'success' && <Icon iconNode={CircleCheckIcon} />}
            {color === 'warning' && <Icon iconNode={CircleAlertIcon} />}
            {color === 'error' && <Icon iconNode={CircleAlertIcon} />}
            {color === 'info' && <Icon iconNode={InfoIcon} />}
            <span>{children}</span>
        </div>
    )
}
