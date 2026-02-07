export default function HeadingSmall({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <header>
            <h3 className="mb-0.5 font-semibold">{title}</h3>
            {description && (
                <p className="text-xs text-base-content/80">{description}</p>
            )}
        </header>
    );
}
