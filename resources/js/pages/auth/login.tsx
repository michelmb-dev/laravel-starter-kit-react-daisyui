import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Fieldset } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BaseLink } from '@/components/ui/link';
import { Loading } from '@/components/ui/loading';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below to log in"
        >
            <Head title="Log in" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
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
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">
                                        <span>Password</span>
                                        {canResetPassword && (
                                            <BaseLink
                                                href={request().url}
                                                tabIndex={5}
                                            >
                                                Forgot password?
                                            </BaseLink>
                                        )}
                                    </legend>
                                    <Input
                                        inputSize={'full'}
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Password"
                                    />
                                    <p className="label text-error">
                                        {errors.password}
                                    </p>
                                </fieldset>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    checkboxSize="sm"
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>

                            <Button
                                color="secondary"
                                type="submit"
                                className="mt-4 w-full"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Loading />}
                                Log in
                            </Button>
                        </div>

                        {canRegister && (
                            <div className="text-muted-foreground text-center text-sm">
                                Don't have an account?{' '}
                                <BaseLink href={register().url} tabIndex={5}>
                                    Sign up
                                </BaseLink>
                            </div>
                        )}
                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}
