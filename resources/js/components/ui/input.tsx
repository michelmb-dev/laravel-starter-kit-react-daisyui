import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';

const inputVariants = cva('input', {
    variants: {
        style: {
            ghost: 'input-ghost',
        },
        color: {
            neutral: 'input-neutral',
            primary: 'input-primary',
            secondary: 'input-secondary',
            accent: 'input-accent',
            info: 'input-info',
            success: 'input-success',
            warning: 'input-warning',
            error: 'input-error',
        },
        inputSize: {
            xs: 'input-xs',
            sm: 'input-sm',
            lg: 'input-lg',
            xl: 'input-xl',
            full: 'w-full',
        },
    },
});

export function Input({
    style,
    inputSize,
    color,
    className,
    type = 'text',
    ...props
}: ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
    return (
        <input
            type={type}
            className={cn(
                inputVariants({
                    style,
                    inputSize,
                    color,
                    className,
                }),
            )}
            {...props}
        />
    );
}

export function InputWithLabel({
    label,
    position = 'start',
    style,
    inputSize,
    color,
    className,
    type = 'text',
    ...props
}: ComponentProps<'input'> &
    VariantProps<typeof inputVariants> & {
        label: string;
        position?: 'start' | 'end';
    }) {
    return (
        <label
            className={cn(
                inputVariants({
                    style,
                    inputSize,
                    color,
                    className,
                }),
            )}
        >
            {position === 'start' && <span className="label">{label}</span>}
            <input type={type} {...props} />
            {position === 'end' && <span className="label">{label}</span>}
        </label>
    );
}

export function InputWithFloatingLabel({
    label,
    style,
    inputSize,
    color,
    className,
    type = 'text',
    ...props
}: ComponentProps<'input'> &
    VariantProps<typeof inputVariants> & {
        label: string;
    }) {
    return (
        <label className="floating-label">
            <span>{label}</span>
            <input
                type={type}
                className={cn(
                    inputVariants({
                        style,
                        inputSize,
                        color,
                        className,
                    }),
                )}
                {...props}
            />
        </label>
    );
}
