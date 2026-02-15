import { Button } from '@/components/ui/button'
import { Fieldset } from '@/components/ui/fieldset'
import { Input } from '@/components/ui/input'
import { Loading } from '@/components/ui/loading'
import AuthLayout from '@/layouts/auth-layout'
import { store } from '@/routes/password/confirm'
import { Form, Head } from '@inertiajs/react'

export default function ConfirmPassword() {
    return (
        <AuthLayout
            title="Confirm your password"
            description="This is a secure area of the application. Please confirm your password before continuing."
        >
            <Head title="Confirm password" />

            <Form {...store.form()} resetOnSuccess={['password']}>
                {({ processing, errors }) => (
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <Fieldset title="Password" error={errors.password}>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    autoFocus
                                    className="w-full outline-none"
                                    autoComplete="off"
                                />
                            </Fieldset>
                        </div>

                        <div className="flex items-center">
                            <Button
                                color="secondary"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing && <Loading />}
                                Confirm password
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </AuthLayout>
    )
}
