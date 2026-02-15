// Components
import { login } from '@/routes'
import { email } from '@/routes/password'
import { Form, Head } from '@inertiajs/react'

import { Button } from '@/components/ui/button'
import { Fieldset } from '@/components/ui/fieldset'
import { Input } from '@/components/ui/input'
import { BaseLink } from '@/components/ui/link'
import { Loading } from '@/components/ui/loading'
import AuthLayout from '@/layouts/auth-layout'

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="space-y-6">
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Fieldset
                                    title="Email Address"
                                    error={errors.email}
                                >
                                    <Input
                                        inputSize="full"
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                    />
                                </Fieldset>
                            </div>

                            <div className="my-6 flex items-center justify-start">
                                <Button
                                    color="secondary"
                                    className="w-full"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing && <Loading />}
                                    Email password reset link
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="text-muted-foreground space-x-1 text-center text-sm">
                    <span>Or, return to</span>
                    <BaseLink href={login().url}>log in</BaseLink>
                </div>
            </div>
        </AuthLayout>
    )
}
