import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController'
import Heading from '@/components/shared/heading'
import { Button } from '@/components/ui/button'
import { Fieldset } from '@/components/ui/fieldset'
import { Input } from '@/components/ui/input'
import { send } from '@/routes/verification'
import type { SharedData } from '@/types'
import { Transition } from '@headlessui/react'
import { Form, Link, usePage } from '@inertiajs/react'

export function Profile({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean
    status?: string
}) {
    const { auth } = usePage<SharedData>().props

    return (
        <>
            <Heading
                title="Profile information"
                description="Update your name and email address"
            />

            <Form
                {...ProfileController.update.form()}
                options={{
                    preserveScroll: true,
                }}
                className="space-y-6"
            >
                {({ processing, recentlySuccessful, errors }) => (
                    <>
                        <Fieldset title="Name" name="name" error={errors.name}>
                            <Input
                                className="w-full border-neutral"
                                style={'ghost'}
                                id="name"
                                name="name"
                                required
                                autoComplete="name"
                                placeholder="Full name"
                                defaultValue={auth.user.name}
                            />
                        </Fieldset>

                        <Fieldset
                            title="Email address"
                            name="email"
                            error={errors.email}
                        >
                            <Input
                                className="w-full border-neutral"
                                style={'ghost'}
                                type="email"
                                id="email"
                                name="email"
                                required
                                autoComplete="email"
                                placeholder="Email address"
                                defaultValue={auth.user.email}
                            />
                        </Fieldset>

                        {mustVerifyEmail &&
                            auth.user.email_verified_at === null && (
                                <div>
                                    <p className="text-muted-foreground -mt-4 text-sm">
                                        Your email address is unverified.{' '}
                                        <Link
                                            href={send()}
                                            as="button"
                                            className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                        >
                                            Click here to resend the
                                            verification email.
                                        </Link>
                                    </p>

                                    {status === 'verification-link-sent' && (
                                        <div className="mt-2 text-sm font-medium text-green-600">
                                            A new verification link has been
                                            sent to your email address.
                                        </div>
                                    )}
                                </div>
                            )}

                        <div className="flex items-center gap-4">
                            <Button disabled={processing} color={'secondary'}>
                                Save
                            </Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-success">Saved</p>
                            </Transition>
                        </div>
                    </>
                )}
            </Form>
        </>
    )
}
