import { AppLayout } from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type TBreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: TBreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
        </AppLayout>
    );
}
