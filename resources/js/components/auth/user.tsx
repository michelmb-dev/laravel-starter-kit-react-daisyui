import { Avatar } from '@/components/ui/avatar';
import {
    Dropdown,
    DropdownContent,
    DropdownItem,
    DropdownTrigger,
} from '@/components/ui/dropdown';
import { InertiaLink } from '@/components/ui/link';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';
import { logout } from '@/routes';
import { show } from '@/routes/settings';
import type { SharedData, User } from '@/types';
import { router, usePage } from '@inertiajs/react';
import {
    ChevronsUpDown,
    LogOutIcon,
    SettingsIcon,
    User2Icon,
} from 'lucide-react';

export function UserInfo({
    user,
    showEmail = false,
    showInitials = false,
    isDrawerOpen = true,
}: {
    user: User;
    showEmail?: boolean;
    showInitials?: boolean;
    isDrawerOpen?: boolean;
}) {
    const getInitials = useInitials();

    return (
        <>
            <Avatar className="rounded-full p-1">
                {showInitials ? (
                    <span>{getInitials(user.name)}</span>
                ) : (
                    <User2Icon size={16} />
                )}
            </Avatar>
            {isDrawerOpen && (
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium whitespace-nowrap transition-all duration-300 is-drawer-close:opacity-0 is-drawer-open:opacity-100">
                        {user.name}
                    </span>
                    {showEmail && isDrawerOpen && (
                        <span className="truncate text-xs leading-none text-base-content/50">
                            {user.email}
                        </span>
                    )}
                </div>
            )}
        </>
    );
}

export function UserMenu({ isDrawerOpen = false }: { isDrawerOpen?: boolean }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="p-2">
            <Dropdown
                placement={isDrawerOpen ? 'top' : 'right'}
                className="min-w-full flex-1"
            >
                <DropdownTrigger
                    className="tooltip flex h-8 items-center justify-start gap-1 border-neutral bg-base-content/10 px-2 font-normal hover:border hover:bg-inherit is-drawer-close:tooltip-right"
                    data-tip="User Menu"
                >
                    <UserInfo user={auth.user} isDrawerOpen={isDrawerOpen} />
                    {isDrawerOpen && <ChevronsUpDown size={16} />}
                </DropdownTrigger>
                <DropdownContent
                    className={cn(
                        'bottom-12 z-50 min-w-full rounded-xl border border-neutral bg-base-100',
                        !isDrawerOpen &&
                            'bottom-14 ml-2 max-w-min min-w-40 pr-2',
                    )}
                >
                    <DropdownItem>
                        <InertiaLink href={show()} prefetch className="p-1">
                            <SettingsIcon size={16} />
                            <span>Settings</span>
                        </InertiaLink>
                    </DropdownItem>
                    <DropdownItem>
                        <InertiaLink
                            href={logout()}
                            onClick={() => router.flushAll()}
                            className="p-1"
                        >
                            <LogOutIcon size={16} />
                            <span>Log Out</span>
                        </InertiaLink>
                    </DropdownItem>
                </DropdownContent>
            </Dropdown>
        </div>
    );
}
