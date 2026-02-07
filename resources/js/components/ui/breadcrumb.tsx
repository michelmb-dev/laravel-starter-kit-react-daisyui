import { type ComponentProps } from 'react';

export function Breadcrumb({ ...props }: ComponentProps<'nav'>) {
    return (
        <nav
            aria-label="breadcrumb"
            className="breadcrumbs text-xs"
            {...props}
        />
    );
}

export function BreadcrumbList({ ...props }: ComponentProps<'ul'>) {
    return <ul {...props} />;
}

export function BreadcrumbItem({ ...props }: ComponentProps<'li'>) {
    return <li {...props} />;
}
