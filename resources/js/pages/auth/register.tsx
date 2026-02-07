import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Fieldset } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';
import { BaseLink } from '@/components/ui/link';
import { Loading } from '@/components/ui/loading';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />
            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Fieldset title="Name" error={errors.name}>
                                    <Input
                                        inputSize="full"
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                    />
                                </Fieldset>
                            </div>

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

                            <div className="grid gap-2">
                                <Fieldset
                                    title="Password"
                                    error={errors.password}
                                >
                                    <Input
                                        inputSize="full"
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </Fieldset>
                            </div>

                            <div className="grid gap-2">
                                <Fieldset
                                    title="Confirm password"
                                    error={errors.password_confirmation}
                                >
                                    <Input
                                        inputSize="full"
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                    />
                                </Fieldset>
                            </div>

                            <Button
                                type="submit"
                                tabIndex={5}
                                color="secondary"
                                data-test="register-user-button"
                                className="mt-6"
                            >
                                {processing && <Loading />}
                                Create account
                            </Button>
                        </div>

                        <div className="text-muted-foreground text-center text-sm">
                            Already have an account?{' '}
                            <BaseLink href={login().url} tabIndex={6}>
                                Log in
                            </BaseLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
