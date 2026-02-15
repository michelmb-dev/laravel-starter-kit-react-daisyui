import { Form } from '@inertiajs/react'
import { useRef } from 'react'
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController'
import Heading from '@/components/shared/heading'
import { Button } from '@/components/ui/button'
import { Dialog, DialogAction, DialogBox } from '@/components/ui/dialog'
import { Fieldset } from '@/components/ui/fieldset'
import { Input } from '@/components/ui/input'

export function DeleteUser() {
    const modalRef = useRef<HTMLDialogElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)

    return (
        <>
            <Heading
                title="Delete account"
                description="Delete your account and all of its resources"
            />
            <div className="space-y-4 rounded-lg border border-error bg-error/20 p-4">
                <div className="relative space-y-0.5 text-base-content">
                    <h3 className="font-bold">Warning</h3>
                    <p className="text-sm">
                        Please proceed with caution, this cannot be undone.
                    </p>
                    <button
                        className="mt-4 link text-error"
                        onClick={() => modalRef.current?.showModal()}
                    >
                        Delete Account
                    </button>
                </div>

                <Dialog
                    id="Modal-User-Delete"
                    ref={modalRef}
                    aria-label="Delete Account"
                >
                    <DialogBox>
                        <h2>Are you sure you want to delete your account?</h2>
                        <p>
                            Once your account is deleted, all of its resources
                            and data will also be permanently deleted. Please
                            enter your password to confirm you would like to
                            permanently delete your account.
                        </p>
                        <Form
                            {...ProfileController.destroy.form()}
                            options={{
                                preserveScroll: true,
                            }}
                            onError={() => passwordInput.current?.focus()}
                            resetOnSuccess
                            className="space-y-6"
                        >
                            {({ resetAndClearErrors, processing, errors }) => (
                                <>
                                    <div className="grid gap-2">
                                        <Fieldset
                                            title="Password"
                                            name="password"
                                            error={errors.password}
                                        >
                                            <Input
                                                className="border-neutral outline-neutral"
                                                style={'ghost'}
                                                id="password"
                                                type="password"
                                                name="password"
                                                ref={passwordInput}
                                                placeholder="Password"
                                                autoComplete="username"
                                            />
                                        </Fieldset>
                                    </div>

                                    <DialogAction className="gap-2">
                                        <Button
                                            color="neutral"
                                            onClick={() => {
                                                resetAndClearErrors()
                                                modalRef.current?.close()
                                            }}
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            color="error"
                                            disabled={processing}
                                            type="submit"
                                        >
                                            Delete account
                                        </Button>
                                    </DialogAction>
                                </>
                            )}
                        </Form>
                    </DialogBox>
                </Dialog>
            </div>
        </>
    )
}
