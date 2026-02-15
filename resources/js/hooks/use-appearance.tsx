import { useCallback, useEffect, useState } from 'react'

export type Appearance = 'light' | 'dark' | 'system'

const prefersDark = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

const applyTheme = (appearance: Appearance) => {
    const theme =
        appearance === 'system'
            ? prefersDark()
                ? 'dark'
                : 'light'
            : appearance

    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
}

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document !== 'undefined') {
        const maxAge = days * 24 * 60 * 60
        document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`
    }
}

export function initializeTheme() {
    const savedAppearance =
        (localStorage.getItem('appearance') as Appearance) || 'system'
    applyTheme(savedAppearance)

    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
            if (localStorage.getItem('appearance') === 'system') {
                applyTheme('system')
            }
        })
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('system')

    const updateAppearance = useCallback((mode: Appearance) => {
        setAppearance(mode)
        localStorage.setItem('appearance', mode)
        setCookie('appearance', mode)
        applyTheme(mode)
    }, [])

    useEffect(() => {
        const savedAppearance = localStorage.getItem(
            'appearance',
        ) as Appearance | null
        if (savedAppearance) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            updateAppearance(savedAppearance)
        }
    }, [updateAppearance])

    return { appearance, updateAppearance } as const
}
