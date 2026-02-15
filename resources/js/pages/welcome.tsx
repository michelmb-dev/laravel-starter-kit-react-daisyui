import {
    Card,
    CardActions,
    CardBody,
    CardDescription,
    CardImage,
    CardTitle,
} from '@/components/ui/card'
import { InertiaLink } from '@/components/ui/link'
import { Nav, NavEnd, NavStart } from '@/components/ui/nav'
import { dashboard, login, register } from '@/routes'
import type { SharedData } from '@/types'
import { Head, usePage } from '@inertiajs/react'

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean
}) {
    const { auth } = usePage<SharedData>().props

    return (
        <>
            <Head title="Welcome" />

            <header className="mx-auto max-w-96 py-4 lg:max-w-5xl">
                <Nav>
                    <NavStart className="w-full" />
                    <NavEnd className={'gap-4'}>
                        {auth.user ? (
                            <InertiaLink href={dashboard()}>
                                Dashboard
                            </InertiaLink>
                        ) : (
                            <>
                                <InertiaLink href={login()} underline={'hover'}>
                                    Login
                                </InertiaLink>
                                {canRegister && (
                                    <InertiaLink
                                        href={register()}
                                        underline={'hover'}
                                    >
                                        Register
                                    </InertiaLink>
                                )}
                            </>
                        )}
                    </NavEnd>
                </Nav>
            </header>

            <div className="grid place-items-center pt-24 lg:pt-52">
                <Card
                    className="max-w-96 border-neutral shadow-xl shadow-base-300 lg:card-side lg:max-w-11/12"
                    style={'border'}
                >
                    <CardImage
                        src={'favicon.svg'}
                        className="w-full bg-base-300 lg:w-sm"
                    />
                    <CardBody>
                        <CardTitle children="Let's get started with DaisyUI" />
                        <CardDescription>
                            Laravel has an incredibly rich ecosystem. We suggest
                            starting with the following.
                        </CardDescription>
                        <ul className="steps steps-vertical">
                            <li className="step step-neutral">
                                <span className="step-icon overflow-hidden">
                                    <img
                                        className="size-6"
                                        src="/favicon.svg"
                                        alt="daisyUI"
                                    />
                                </span>
                                <span>
                                    Read the
                                    <a
                                        href="https://laravel.com/docs"
                                        target="_blank"
                                        className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                                        rel="noopener"
                                    >
                                        <span>Documentation</span>
                                        <svg
                                            width={10}
                                            height={11}
                                            viewBox="0 0 10 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2.5 w-2.5"
                                        >
                                            <path
                                                d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                stroke="currentColor"
                                                strokeLinecap="square"
                                            />
                                        </svg>
                                    </a>
                                </span>
                            </li>
                            <li className="step step-neutral">
                                <span className="step-icon overflow-hidden">
                                    <img
                                        className="size-6"
                                        src="https://laracasts.com/favicons/favicon.svg"
                                        alt="daisyUI"
                                    />
                                </span>
                                <span>
                                    Watch video tutorials at
                                    <a
                                        href="https://laracasts.com"
                                        target="_blank"
                                        className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                                        rel="noopener"
                                    >
                                        <span>Laracasts</span>
                                        <svg
                                            width={10}
                                            height={11}
                                            viewBox="0 0 10 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2.5 w-2.5"
                                        >
                                            <path
                                                d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                stroke="currentColor"
                                                strokeLinecap="square"
                                            />
                                        </svg>
                                    </a>
                                </span>
                            </li>
                            <li className="step step-neutral">
                                <span className="step-icon">
                                    <img src="/daisy.png" alt="daisyUI" />
                                </span>
                                <span>
                                    Starting with
                                    <a
                                        href="https://daisyui.com/"
                                        target="_blank"
                                        className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                                        rel="noopener"
                                    >
                                        <span>DaisyUI</span>
                                        <svg
                                            width={10}
                                            height={11}
                                            viewBox="0 0 10 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2.5 w-2.5"
                                        >
                                            <path
                                                d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                stroke="currentColor"
                                                strokeLinecap="square"
                                            />
                                        </svg>
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <CardActions className="mt-2">
                            <a
                                className="btn text-[#f53003] btn-outline"
                                target="_blank"
                                href="https://cloud.laravel.com"
                                children="Deploy now"
                                rel="noopener"
                            />
                        </CardActions>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}
