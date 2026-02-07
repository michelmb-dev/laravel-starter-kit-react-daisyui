import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';

const checkboxVariants = cva('checkbox', {
    variants: {
        color: {
            neutral: 'checkbox-neutral',
            primary: 'checkbox-primary',
            secondary: 'checkbox-secondary',
            accent: 'checkbox-accent',
            info: 'checkbox-info',
            success: 'checkbox-success',
            warning: 'checkbox-warning',
            error: 'checkbox-error',
        },
        checkboxSize: {
            xs: 'checkbox-xs',
            sm: 'checkbox-sm',
            lg: 'checkbox-lg',
            xl: 'checkbox-xl',
        },
    },
});

export function Checkbox({
    color,
    checkboxSize,
    className,
    ...props
}: ComponentProps<'input'> & VariantProps<typeof checkboxVariants>) {
    return (
        <input
            type="checkbox"
            data-slot="checkbox"
            className={cn(
                checkboxVariants({
                    color,
                    checkboxSize,
                    className,
                }),
            )}
            {...props}
        />
    );
}
