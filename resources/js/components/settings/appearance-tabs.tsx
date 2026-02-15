import Heading from '@/components/shared/heading'
import { Button } from '@/components/ui/button'
import { type Appearance, useAppearance } from '@/hooks/use-appearance'
import { cn } from '@/lib/utils'
import { type LucideIcon, Monitor, Moon, Sun } from 'lucide-react'
import type { HTMLAttributes } from 'react'

export function AppearanceTabs({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance } = useAppearance()

    const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
    ]

    return (
        <>
            <Heading
                title="Appearance settings"
                description="Update your account's appearance settings"
            />
            <div
                className={cn('join overflow-hidden rounded-lg', className)}
                {...props}
            >
                {tabs.map(({ value, icon: Icon, label }) => (
                    <Button
                        key={value}
                        style={'soft'}
                        onClick={() => updateAppearance(value)}
                        className={cn(
                            'btn-item transition-colors',
                            appearance === value &&
                                'bg-secondary text-secondary-content',
                        )}
                    >
                        <Icon className="-ml-1 h-4 w-4" />
                        <span className="ml-1.5 text-sm">{label}</span>
                    </Button>
                ))}
            </div>
        </>
    )
}
