import { Transition } from '@headlessui/react'
import { Form } from '@inertiajs/react'
import { useRef } from 'react'
import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController'
import Heading from '@/components/shared/heading'
import { Button } from '@/components/ui/button'
import { Fieldset } from '@/components/ui/fieldset'
import { Input } from '@/components/ui/input'

export function Password() {
    const passwordInput = useRef<HTMLInputElement>(null)
    const currentPasswordInput = useRef<HTMLInputElement>(null)

    return (
        <>
            <Heading
                title="Update password"
                description="Ensure your account is using a long, random password to stay secure"
            />

            <Form
                {...PasswordController.update.form()}
                options={{
                    preserveScroll: true,
                }}
                resetOnError={[
                    'password',
                    'password_confirmation',
                    'current_password',
                ]}
                resetOnSuccess
                onError={(errors) => {
                    if (errors.password) {
                        passwordInput.current?.focus()
                    }

                    if (errors.current_password) {
                        currentPasswordInput.current?.focus()
                    }
                }}
                className="space-y-6"
            >
                {({ errors, processing, recentlySuccessful }) => (
                    <>
                        <div className="grid gap-2">
                            <Fieldset
                                title="Currrent password"
                                error={errors.current_password}
                            >
                                <Input
                                    id="current_password"
                                    ref={currentPasswordInput}
                                    name="current_password"
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="off"
                                    placeholder="Current password"
                                />
                            </Fieldset>
                        </div>

                        <div className="grid gap-2">
                            <Fieldset
                                title="New password"
                                error={errors.password}
                            >
                                <Input
                                    id="password"
                                    ref={passwordInput}
                                    name="password"
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="off"
                                    placeholder="New password"
                                />
                            </Fieldset>
                        </div>

                        <div className="grid gap-2">
                            <Fieldset
                                title="Confirm password"
                                error={errors.password_confirmation}
                            >
                                <Input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="off"
                                    placeholder="Confirm password"
                                />
                            </Fieldset>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button color={'secondary'} disabled={processing}>
                                Save password
                            </Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">
                                    Saved
                                </p>
                            </Transition>
                        </div>
                    </>
                )}
            </Form>
        </>
    )
}
