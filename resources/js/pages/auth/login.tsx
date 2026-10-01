import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp';

import { Head, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { validateForm, validator } from '@/lib/validator';
import login from '@/routes/login';

interface LoginProps {
    otp_sent?: boolean;
    otp_code?: string;
}

interface FormData {
    phone: string;
    otp: string;
}

interface LocalErrors {
    phone?: string;
    otp?: string;
}

export default function Login({
                                  otp_sent = false,
                                  otp_code,
                              }: LoginProps) {
    const { props } = usePage();

    const [showOtpForm, setShowOtpForm] = useState<boolean>(otp_sent);
    const [timer, setTimer] = useState<number>(0);

    const [localErrors, setLocalErrors] = useState<LocalErrors>({});

    /**
     * برای جلوگیری از submit دوباره توسط useEffect
     */
    const autoSubmittingPhone = useRef(false);
    const autoSubmittingOtp = useRef(false);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        clearErrors,
    } = useForm<FormData>({
        phone: '',
        otp: '',
    });

    const rules = {
        phone: 'required|min:11|max:11|regex:^09[0-9]{9}$',
        otp: 'required|digits:6',
    };

    /**
     * تایمر ارسال مجدد
     */
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;

        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [timer]);

    /**
     * تغییر مقدار input + validation لحظه‌ای
     */
    const handleChange = (
        name: keyof FormData,
        value: string,
    ) => {
        setData(name, value);

        clearErrors(name);

        if (!rules[name]) {
            return;
        }

        const error = validator(
            name,
            value,
            rules[name],
            {
                ...data,
                [name]: value,
            },
            undefined,
        );

        setLocalErrors((prev) => ({
            ...prev,
            [name]: error ?? '',
        }));
    };

    /**
     * ارسال کد OTP
     */
    const handleSendCode = (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        if (processing) {
            return;
        }

        if (timer > 0) {
            return;
        }

        clearErrors();

        const formErrors = validateForm(
            {
                phone: data.phone,
            },
            {
                phone: rules.phone,
            },
            undefined,
        );

        if (Object.keys(formErrors).length > 0) {
            setLocalErrors(formErrors);
            return;
        }

        autoSubmittingPhone.current = true;

        post(login.store(), {
            preserveScroll: true,

            onSuccess: (res) => {
                setShowOtpForm(true);
                setTimer(120);

                const otpFromFlash =
                    (res?.props as any)?.flash?.otp_code ||
                    (props?.flash as any)?.otp_code ||
                    otp_code;

                if (otpFromFlash) {
                    console.log(
                        'OTP Code (for testing):',
                        otpFromFlash,
                    );
                }
            },

            onFinish: () => {
                autoSubmittingPhone.current = false;
            },
        });
    };

    /**
     * تأیید OTP
     */
    const handleVerifyCode = (
        e?: FormEvent<HTMLFormElement>,
    ) => {
        e?.preventDefault();

        if (processing) {
            return;
        }

        clearErrors();

        const formErrors = validateForm(
            data,
            {
                phone: rules.phone,
                otp: rules.otp,
            },
            undefined,
        );

        if (Object.keys(formErrors).length > 0) {
            setLocalErrors(formErrors);
            return;
        }

        autoSubmittingOtp.current = true;

        post(login.verify(), {
            preserveScroll: true,

            onFinish: () => {
                autoSubmittingOtp.current = false;
            },
        });
    };

    /**
     * ارسال خودکار شماره موبایل
     *
     * وقتی شماره دقیقاً 11 رقم شد،
     * فرم مثل submit معمولی ارسال می‌شود.
     */
    useEffect(() => {
        if (showOtpForm) {
            return;
        }

        if (data.phone.length !== 11) {
            return;
        }

        if (processing) {
            return;
        }

        if (timer > 0) {
            return;
        }

        if (autoSubmittingPhone.current) {
            return;
        }

        /**
         * قبل از submit validation خودمان اجرا می‌شود
         */
        const formErrors = validateForm(
            {
                phone: data.phone,
            },
            {
                phone: rules.phone,
            },
            undefined,
        );

        if (Object.keys(formErrors).length > 0) {
            setLocalErrors(formErrors);
            return;
        }

        handleSendCode();
    }, [
        data.phone,
        showOtpForm,
        processing,
        timer,
    ]);

    /**
     * ارسال خودکار OTP
     *
     * وقتی 6 رقم کامل شد،
     * فرم مثل submit معمولی ارسال می‌شود.
     */
    useEffect(() => {
        if (!showOtpForm) {
            return;
        }

        if (data.otp.length !== 6) {
            return;
        }

        if (processing) {
            return;
        }

        if (autoSubmittingOtp.current) {
            return;
        }

        /**
         * قبل از submit validation خودمان اجرا می‌شود
         */
        const formErrors = validateForm(
            data,
            {
                phone: rules.phone,
                otp: rules.otp,
            },
            undefined,
        );

        if (Object.keys(formErrors).length > 0) {
            setLocalErrors(formErrors);
            return;
        }

        handleVerifyCode();
    }, [
        data.otp,
        showOtpForm,
        processing,
    ]);

    /**
     * تغییر شماره
     */
    const handleChangePhone = () => {
        setShowOtpForm(false);

        reset('otp');

        clearErrors();

        setLocalErrors({});

        setTimer(0);

        autoSubmittingPhone.current = false;
        autoSubmittingOtp.current = false;
    };

    /**
     * خطای قابل نمایش
     *
     * اول validation لحظه‌ای خودمان،
     * اگر نبود خطای Backend اینرشیا.
     */
    const phoneError =
        localErrors.phone || errors.phone;

    const otpError =
        localErrors.otp || errors.otp;

    return (
        <AuthLayout
            title="ورود و یا ثبت نام"
            description="لطفا برای ورود و یا ثبت نام تلفن همراه خود را وارد کنید."
        >
            <Head title="ورود | ثبت نام" />

            <Card>
                <CardContent>
                    {!showOtpForm ? (
                        <form
                            onSubmit={handleSendCode}
                            className="flex flex-col gap-6"
                            dir="rtl"
                        >
                            <div className="grid gap-2">
                                <Label htmlFor="phone">
                                    تلفن همراه
                                </Label>

                                <Input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="0912..."
                                    value={data.phone}
                                    onChange={(e) =>
                                        handleChange(
                                            'phone',
                                            e.target.value,
                                        )
                                    }
                                    required
                                    autoFocus
                                    autoComplete="tel"
                                />

                                <InputError
                                    message={phoneError}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="relative w-full"
                                disabled={
                                    processing ||
                                    timer > 0
                                }
                            >
                                {processing ? (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                ) : timer > 0 ? (
                                    <>
                                        ارسال مجدد تا{' '}
                                        <span className="font-bold">
                                            {timer}
                                        </span>{' '}
                                        ثانیه
                                    </>
                                ) : (
                                    'ارسال کد ورود'
                                )}
                            </Button>
                        </form>
                    ) : (
                        <form
                            onSubmit={handleVerifyCode}
                            className="flex flex-col gap-6"
                            dir="rtl"
                        >
                            <div className="grid gap-2">
                                <Label htmlFor="otp">
                                    کد تایید
                                </Label>

                                <div
                                    className="flex justify-center"
                                    dir="ltr"
                                >
                                    <InputOTP
                                        maxLength={6}
                                        value={data.otp}
                                        onChange={(value) => {
                                            handleChange(
                                                'otp',
                                                value,
                                            );
                                        }}
                                        inputMode="numeric"
                                        autoFocus
                                        aria-invalid={!!otpError}
                                    >
                                        <InputOTPGroup>
                                            <InputOTPSlot
                                                index={0}
                                                aria-invalid={!!otpError}
                                            />
                                            <InputOTPSlot
                                                index={1}
                                                aria-invalid={!!otpError}
                                            />
                                        </InputOTPGroup>

                                        <InputOTPSeparator />

                                        <InputOTPGroup>
                                            <InputOTPSlot
                                                index={2}
                                                aria-invalid={!!otpError}
                                            />
                                            <InputOTPSlot
                                                index={3}
                                                aria-invalid={!!otpError}
                                            />
                                        </InputOTPGroup>

                                        <InputOTPSeparator />

                                        <InputOTPGroup>
                                            <InputOTPSlot
                                                index={4}
                                                aria-invalid={!!otpError}
                                            />
                                            <InputOTPSlot
                                                index={5}
                                                aria-invalid={!!otpError}
                                            />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </div>

                                <InputError
                                    message={otpError}
                                />
                            </div>

                            <input
                                type="hidden"
                                name="phone"
                                value={data.phone}
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing ? (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                ) : (
                                    'ورود به حساب'
                                )}
                            </Button>

                            <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                                <button
                                    type="button"
                                    className="underline"
                                    onClick={
                                        handleChangePhone
                                    }
                                >
                                    تغییر شماره
                                </button>

                                {timer > 0 ? (
                                    <span>
                                        ارسال مجدد در{' '}
                                        <span className="font-bold">
                                            {timer}
                                        </span>{' '}
                                        ثانیه
                                    </span>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSendCode()
                                        }
                                        className="text-blue-600 underline"
                                    >
                                        ارسال مجدد کد
                                    </button>
                                )}
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </AuthLayout>
    );
}