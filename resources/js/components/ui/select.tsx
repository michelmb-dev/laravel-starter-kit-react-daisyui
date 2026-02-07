import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';

const selectVariants = cva('select', {
    variants: {
        style: {
            ghost: 'select-ghost',
            none: 'appearance-none',
        },
        color: {
            neutral: 'select-neutral',
            primary: 'select-primary',
            secondary: 'select-secondary',
            accent: 'select-accent',
            info: 'select-info',
            success: 'select-success',
            warning: 'select-warning',
            error: 'select-error',
        },
        size: {
            xs: 'select-xs',
            sm: 'select-sm',
            lg: 'select-lg',
            xl: 'select-xl',
        },
    },
});

export function Select({
    style,
    color,
    size,
    className,
    ...props
}: ComponentProps<'select'> & VariantProps<typeof selectVariants>) {
    return (
        <select
            defaultValue="Pick a color"
            className={cn(
                selectVariants({
                    style,
                    color,
                    size,
                    className,
                }),
            )}
            {...props}
        />
    );
}

export function SelectOption({ ...props }: ComponentProps<'option'>) {
    return <option {...props} />;
}

export function SelectWithLabel({
    label,
    size,
    color,
    className,
    children,
    ...props
}: ComponentProps<'label'> &
    VariantProps<typeof selectVariants> & { label: string }) {
    return (
        <label
            className={cn(selectVariants({ size, color, className }))}
            {...props}
        >
            <span className="label">{label}</span>
            {children}
        </label>
    );
}
