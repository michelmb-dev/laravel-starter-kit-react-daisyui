import {
    Card,
    CardBody,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import { type ReactNode } from 'react';

export default function AuthLayout({
    children,
    title,
    description,
    ...props
}: {
    children: ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="grid h-screen place-items-center justify-items-center">
            <Card
                style={'border'}
                className="border-neutral md:min-w-md"
                {...props}
            >
                <CardBody>
                    <CardTitle
                        children={title}
                        className="justify-center text-2xl"
                    />
                    <CardDescription
                        children={description}
                        className="text-center"
                    />
                    {children}
                </CardBody>
            </Card>
        </div>
    );
}
