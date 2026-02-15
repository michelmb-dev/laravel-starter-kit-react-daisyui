import type { ComponentProps } from 'react'

export function Fieldset({
    title,
    error,
    children,
    ...props
}: ComponentProps<'fieldset'> & { title: string; error?: string }) {
    return (
        <fieldset className="fieldset" {...props}>
            <legend className="fieldset-legend">{title}</legend>
            {children}
            {error && <p className="label text-error">{error}</p>}
        </fieldset>
    )
}
