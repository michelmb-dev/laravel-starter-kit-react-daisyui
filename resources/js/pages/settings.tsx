import { type TBreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { AppearanceTabs } from '@/components/settings/appearance-tabs';
import { DeleteUser } from '@/components/settings/delete-user';
import { Profile } from '@/components/settings/profile';
import { TwoFactor } from '@/components/settings/two-factor';
import { Divider } from '@/components/ui/divider';
import { AppLayout } from '@/layouts/app-layout';
import { show } from '@/routes/settings';

const breadcrumbs: TBreadcrumbItem[] = [
    {
        title: 'Settings',
        href: show().url,
    },
];

export default function Settings({
    ...props
}: {
    mustVerifyEmail: boolean;
    status?: string;
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings" />
            <div className="space-y-8">
                <Profile {...props} />

                <Divider />

                <AppearanceTabs />

                <Divider />

                <TwoFactor
                    requiresConfirmation={props.requiresConfirmation}
                    twoFactorEnabled={props.twoFactorEnabled}
                />

                <Divider />

                <DeleteUser />
            </div>
        </AppLayout>
    );
}
