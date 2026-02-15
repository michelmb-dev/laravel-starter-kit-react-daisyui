import { update } from '@/routes/password'
import { Form, Head } from '@inertiajs/react'

import { Button } from '@/components/ui/button'
import { Fieldset } from '@/components/ui/fieldset'
import { Input } from '@/components/ui/input'
import { Loading } from '@/components/ui/loading'
import AuthLayout from '@/layouts/auth-layout'

interface ResetPasswordProps {
    token: string
    email: string
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <AuthLayout
            title="Reset password"
            description="Please enter your new password below"
        >
            <Head title="Reset password" />

            <Form
                {...update.form()}
                transform={(data) => ({ ...data, token, email })}
                resetOnSuccess={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Fieldset title="Email" error={errors.email}>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    className="mt-1 block w-full"
                                    readOnly
                                />
                            </Fieldset>
                        </div>

                        <div className="grid gap-2">
                            <Fieldset title="Password" error={errors.password}>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    autoComplete="new-password"
                                    className="mt-1 block w-full"
                                    autoFocus
                                    placeholder="Password"
                                />
                            </Fieldset>
                        </div>

                        <div className="grid gap-2">
                            <Fieldset
                                title="Confirm password"
                                error={errors.pasword_confirmation}
                            >
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    autoComplete="new-password"
                                    className="mt-1 block w-full"
                                    placeholder="Confirm password"
                                />
                            </Fieldset>
                        </div>

                        <Button
                            color="secondary"
                            type="submit"
                            className="mt-4 w-full"
                            disabled={processing}
                            data-test="reset-password-button"
                        >
                            {processing && <Loading />}
                            Reset password
                        </Button>
                    </div>
                )}
            </Form>
        </AuthLayout>
    )
}
