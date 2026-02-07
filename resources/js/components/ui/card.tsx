import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';

const cardVariant = cva('card', {
    variants: {
        style: {
            border: 'card-border',
            dash: 'card-dash',
        },
        size: {
            xs: 'card-xs',
            sm: 'card-sm',
            lg: 'card-lg',
            xl: 'card-xl',
        },
        modifier: {
            cardSide: 'card-side',
            imageFull: 'image-full',
        },
    },
});

export function Card({
    style,
    size,
    modifier,
    className,
    ...props
}: ComponentProps<'div'> & VariantProps<typeof cardVariant>) {
    return (
        <div
            className={cn(
                'bg-base-200 shadow-sm',
                cardVariant({
                    style,
                    size,
                    modifier,
                    className,
                }),
            )}
            {...props}
        />
    );
}

export function CardImage({ src, alt, ...props }: ComponentProps<'img'>) {
    return (
        <figure>
            <img {...props} src={src} alt={alt} />
        </figure>
    );
}

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
    return <h2 className={cn('card-title', className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
    return <p className={cn(className)} {...props} />;
}

export function CardBody({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('card-body', className)} {...props} />;
}

export function CardActions({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('card-actions', className)} {...props} />;
}
