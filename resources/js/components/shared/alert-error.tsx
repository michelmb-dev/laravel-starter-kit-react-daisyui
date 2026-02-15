import { Alert } from '@/components/ui/alert'

export default function AlertError({
    errors,
    title,
}: {
    errors: string[]
    title?: string
}) {
    return (
        <Alert color="error">
            <h1>{title || 'Something went wrong.'}</h1>
            <div>
                <ul className="list-inside list-disc text-sm">
                    {Array.from(new Set(errors)).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        </Alert>
    )
}
