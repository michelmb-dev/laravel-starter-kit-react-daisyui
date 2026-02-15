// Components
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { InertiaLink } from '@/components/ui/link'
import { Loading } from '@/components/ui/loading'
import AuthLayout from '@/layouts/auth-layout'
import { logout } from '@/routes'
import { send } from '@/routes/verification'
import { Form, Head } from '@inertiajs/react'

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Verify email"
            description="Please verify your email address by clicking on the link we just emailed to you."
        >
            <Head title="Email verification" />

            <Form {...send.form()} className="space-y-4 text-center">
                {({ processing }) => (
                    <>
                        <Button
                            disabled={processing}
                            className="mt-2 w-full"
                            color="secondary"
                        >
                            {processing && <Loading />}
                            Resend verification email
                        </Button>

                        {status === 'verification-link-sent' && (
                            <Alert color="success" style="outline">
                                A new verification link has been sent to the
                                email address you provided during registration.
                            </Alert>
                        )}

                        <InertiaLink
                            href={logout()}
                            className="mx-auto block text-sm"
                        >
                            Log out
                        </InertiaLink>
                    </>
                )}
            </Form>
        </AuthLayout>
    )
}
