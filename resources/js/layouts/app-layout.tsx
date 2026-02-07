import { UserMenu } from '@/components/auth/user';
import {
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerSide,
    DrawerToggle,
} from '@/components/ui/drawer-sidebar';
import { BaseLink, InertiaLink } from '@/components/ui/link';
import {
    NavigationMenu,
    NavigationMenuGroup,
    NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { HeaderLayout } from '@/layouts/header-layout';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';
import { type NavItem, TBreadcrumbItem } from '@/types';
import { BookOpen, FolderGitIcon, LayoutGrid } from 'lucide-react';
import { ComponentProps, PropsWithChildren, useState } from 'react';

type Props = {
    breadcrumbs: TBreadcrumbItem[];
};

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGitIcon,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

function DrawerSideContent({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-full flex-col items-start overflow-visible bg-base-300 transition-[width] duration-300 ease-in-out is-drawer-close:w-15 is-drawer-open:w-56">
            {children}
        </div>
    );
}

function DrawerSideHeader({ className, children }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'flex h-16 w-full items-center overflow-hidden transition-all duration-300 ease-in-out',
                className,
            )}
        >
            {children}
        </div>
    );
}

function DrawerSideNavigation({ className, children }: ComponentProps<'nav'>) {
    return (
        <nav className={cn('w-full overflow-visible', className)}>
            {children}
        </nav>
    );
}

export function AppLayout({ breadcrumbs, children }: PropsWithChildren<Props>) {
    const isMobile = useIsMobile();

    const [isOpen, setIsOpen] = useState<boolean>(!isMobile);
    const [lastIsMobile, setLastIsMobile] = useState(isMobile);

    if (isMobile !== lastIsMobile) {
        setLastIsMobile(isMobile);
        setIsOpen(!isMobile);
    }

    return (
        <Drawer className="overflow-hidden sm:drawer-open">
            <DrawerToggle
                id="drawer-admin"
                checked={isOpen}
                onChange={(e) => setIsOpen(e.target.checked)}
            />
            <DrawerContent>
                <HeaderLayout breadcrumbs={breadcrumbs} />
                <div className="h-full bg-base-100 p-6">{children}</div>
            </DrawerContent>
            <DrawerSide>
                <DrawerOverlay drawerId="drawer-admin" />
                <DrawerSideContent>
                    <DrawerSideHeader>
                        <a
                            href="/"
                            className="flex min-w-full items-center justify-start gap-3 px-4"
                        >
                            <img
                                src="/favicon.svg"
                                alt="Website logo"
                                className="h-6 w-6"
                            />
                            <span className="text-sm font-semibold whitespace-nowrap transition-all duration-300 is-drawer-close:opacity-0 is-drawer-open:opacity-100">
                                Laravel Starter Kit
                            </span>
                        </a>
                    </DrawerSideHeader>
                    <DrawerSideNavigation className="flex-1">
                        <NavigationMenu className="w-full">
                            <NavigationMenuGroup label={'Platform'}>
                                {mainNavItems.map((item, k) => (
                                    <NavigationMenuItem key={k}>
                                        <InertiaLink
                                            underline="none"
                                            href={item.href}
                                            data-tip={item.title}
                                            className="relative flex h-8 items-center is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                        >
                                            {item.icon && (
                                                <item.icon size={18} />
                                            )}
                                            <span className="transition-all duration-300 is-drawer-close:hidden">
                                                {item.title}
                                            </span>
                                        </InertiaLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuGroup>
                        </NavigationMenu>
                    </DrawerSideNavigation>
                    <DrawerSideNavigation>
                        <NavigationMenu className="w-full">
                            {footerNavItems.map((item, k) => (
                                <NavigationMenuItem key={k}>
                                    <BaseLink
                                        underline="none"
                                        href={item.href.toString()}
                                        target="_blank"
                                        data-tip={item.title}
                                        className="flex h-8 items-center is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                    >
                                        {item.icon && <item.icon size={18} />}
                                        <span className="transition-all duration-300 is-drawer-close:hidden">
                                            {item.title}
                                        </span>
                                    </BaseLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenu>
                        <UserMenu isDrawerOpen={isOpen} />
                    </DrawerSideNavigation>
                </DrawerSideContent>
            </DrawerSide>
        </Drawer>
    );
}
