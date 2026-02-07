import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { DrawerOverlay } from '@/components/ui/drawer-sidebar';
import { InertiaLink } from '@/components/ui/link';
import { Nav, NavEnd, NavStart } from '@/components/ui/nav';
import type { TBreadcrumbItem } from '@/types';
import { ChevronRightIcon, SidebarOpen } from 'lucide-react';

type Props = {
    breadcrumbs: TBreadcrumbItem[];
};

export function HeaderLayout({ breadcrumbs }: Props) {
    return (
        <Nav className="min-h-min w-full bg-base-300">
            <NavStart className="gap-2">
                {/* CTA for toggle Sidebar in drawer layout */}
                <DrawerOverlay
                    drawerId="drawer-admin"
                    className="cursor-pointer"
                    children={<SidebarOpen size={18} />}
                />
                <div className="flex items-center">
                    <ChevronRightIcon
                        size={16}
                        className="stroke-neutral-content"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs.map((item, k) => (
                                <BreadcrumbItem key={k}>
                                    <InertiaLink href={item.href} prefetch>
                                        {item.title}
                                    </InertiaLink>
                                </BreadcrumbItem>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </NavStart>
            <NavEnd></NavEnd>
        </Nav>
    );
}
