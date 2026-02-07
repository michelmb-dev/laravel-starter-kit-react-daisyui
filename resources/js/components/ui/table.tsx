import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';

const tableVariants = cva('table', {
    variants: {
        style: {
            zebra: 'table-zebra',
        },
        rows: {
            pinned: 'table--pin-rows',
        },
        cols: {
            pinned: 'table--pin-cols',
        },
        size: {
            xs: 'table-xs',
            sm: 'table-sm',
            lg: 'table-lg',
            xl: 'table-xl',
        },
    },
});

export function Table({
    style,
    rows,
    cols,
    size,
    className,
    ...props
}: ComponentProps<'table'> & VariantProps<typeof tableVariants>) {
    return (
        <table
            className={cn(
                'bg-base-300',
                tableVariants({ style, rows, cols, size, className }),
            )}
            {...props}
        />
    );
}

export function TableHead({ ...props }: ComponentProps<'thead'>) {
    return <thead {...props} />;
}

export function TableBody({ ...props }: ComponentProps<'tbody'>) {
    return <tbody {...props} />;
}
