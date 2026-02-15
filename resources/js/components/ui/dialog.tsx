import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import {
    type ComponentProps,
    type SyntheticEvent,
    useEffect,
    useRef,
} from 'react'

const dialogVariants = cva('modal', {
    variants: {
        action: {
            open: 'modal-open',
        },
        placement: {
            top: 'modal-top',
            bottom: 'modal-bottom',
            start: 'modal-start',
            end: 'modal-end',
        },
    },
})

export interface DialogProps
    extends Omit<ComponentProps<'dialog'>, 'open'>,
        VariantProps<typeof dialogVariants> {
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export function Dialog({
    id,
    action,
    placement,
    className,
    open,
    onOpenChange,
    onClose,
    ...props
}: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        if (open) {
            if (!dialog.open) {
                dialog.showModal()
            }
        } else {
            if (dialog.open) {
                dialog.close()
            }
        }
    }, [open])

    const handleClose = (event: SyntheticEvent<HTMLDialogElement>) => {
        onOpenChange?.(false)
        onClose?.(event)
    }

    return (
        <dialog
            ref={dialogRef}
            id={id}
            onClose={handleClose}
            {...props}
            className={cn(dialogVariants({ action, placement, className }))}
        />
    )
}

export function DialogBox({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('modal-box', className)} {...props} />
}

export function DialogAction({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('modal-action', className)} {...props} />
}

export function DialogButtonClose({
    className,
    ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
    return (
        <form method="dialog">
            <Button className={cn(buttonVariants({ className }))} {...props} />
        </form>
    )
}
