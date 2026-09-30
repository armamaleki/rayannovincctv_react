type TranslateFunction = (
    key: string,
    options?: Record<string, string>,
) => string;

const persianFields: Record<string, string> = {
    name: 'نام',
    first_name: 'نام',
    last_name: 'نام خانوادگی',
    username: 'نام کاربری',
    email: 'ایمیل',
    phone: 'شماره تلفن همراه',
    password: 'رمز عبور',
    password_confirmation: 'تکرار رمز عبور',
    otp: 'کد تأیید',
    title: 'عنوان',
    description: 'توضیحات',
    address: 'آدرس',
    national_code: 'کد ملی',
    website: 'آدرس وب‌سایت',
    age: 'سن',
    price: 'قیمت',
    amount: 'مبلغ',
    code: 'کد',
};

const getPersianField = (
    fieldName: string,
    t?: TranslateFunction,
): string => {
    if (t) {
        const translatedField = t(`common:fields.${fieldName}`);

        if (
            translatedField &&
            translatedField !== `common:fields.${fieldName}`
        ) {
            return translatedField;
        }
    }

    return (
        persianFields[fieldName] ||
        fieldName.replaceAll('_', ' ')
    );
};

export const validator = (
    fieldName: string,
    value: unknown,
    rules: string,
    formData: Record<string, unknown> = {},
    t?: TranslateFunction,
): string | null => {
    const errors: string[] = [];

    const val =
        value !== null && value !== undefined
            ? String(value).trim()
            : '';

    const field = getPersianField(fieldName, t);

    rules.split('|').forEach((rule) => {
        let ruleName = rule;
        let ruleValue: string | null = null;

        if (rule.includes(':')) {
            [ruleName, ruleValue] = rule.split(':');
        }

        switch (ruleName) {
            case 'required':
                if (!val) {
                    errors.push(`${field} الزامی است.`);
                }
                break;

            case 'min':
                if (
                    ruleValue &&
                    val.length < parseInt(ruleValue, 10)
                ) {
                    errors.push(
                        `طول ${field} باید حداقل ${ruleValue} کاراکتر باشد.`,
                    );
                }
                break;

            case 'max':
                if (
                    ruleValue &&
                    val.length > parseInt(ruleValue, 10)
                ) {
                    errors.push(
                        `طول ${field} نباید بیشتر از ${ruleValue} کاراکتر باشد.`,
                    );
                }
                break;

            case 'numeric':
                if (val && isNaN(Number(val))) {
                    errors.push(`${field} باید عددی باشد.`);
                }
                break;

            case 'email': {
                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (val && !emailRegex.test(val)) {
                    errors.push(`فرمت ${field} معتبر نیست.`);
                }

                break;
            }

            case 'in': {
                if (!ruleValue) break;

                const allowed = ruleValue.split(',');

                if (!allowed.includes(val)) {
                    errors.push(
                        `مقدار انتخاب‌شده برای ${field} معتبر نیست.`,
                    );
                }

                break;
            }

            case 'lowercase':
                if (!/[a-z]/.test(val)) {
                    errors.push(
                        `${field} باید شامل حداقل یک حرف کوچک انگلیسی باشد.`,
                    );
                }
                break;

            case 'uppercase':
                if (!/[A-Z]/.test(val)) {
                    errors.push(
                        `${field} باید شامل حداقل یک حرف بزرگ انگلیسی باشد.`,
                    );
                }
                break;

            case 'number':
                if (!/\d/.test(val)) {
                    errors.push(
                        `${field} باید شامل حداقل یک عدد باشد.`,
                    );
                }
                break;

            case 'special':
                if (!/[^A-Za-z0-9]/.test(val)) {
                    errors.push(
                        `${field} باید شامل حداقل یک کاراکتر خاص باشد.`,
                    );
                }
                break;

            case 'url':
                if (val) {
                    try {
                        const url = new URL(val);

                        if (
                            !['http:', 'https:'].includes(
                                url.protocol,
                            )
                        ) {
                            throw new Error();
                        }
                    } catch {
                        errors.push(
                            `آدرس واردشده برای ${field} معتبر نیست.`,
                        );
                    }
                }
                break;

            case 'regex':
                if (val && ruleValue) {
                    try {
                        const regex = new RegExp(ruleValue);

                        if (!regex.test(val)) {
                            errors.push(
                                `فرمت واردشده برای ${field} معتبر نیست.`,
                            );
                        }
                    } catch {
                        errors.push(
                            `قانون اعتبارسنجی برای ${field} معتبر نیست.`,
                        );
                    }
                }
                break;

            case 'confirmed': {
                if (!ruleValue) break;

                const targetField = ruleValue;
                const targetValue =
                    formData[targetField] ?? '';

                const targetName = getPersianField(
                    targetField,
                    t,
                );

                if (val !== String(targetValue).trim()) {
                    errors.push(
                        `${field} با ${targetName} مطابقت ندارد.`,
                    );
                }

                break;
            }

            default:
                break;
        }
    });

    return errors.length > 0 ? errors[0] : null;
};

export const validateForm = (
    form: Record<string, unknown>,
    rules: Record<string, string>,
    t?: TranslateFunction,
): Record<string, string> => {
    const errors: Record<string, string> = {};

    Object.keys(rules).forEach((field) => {
        const error = validator(
            field,
            form[field],
            rules[field],
            form,
            t,
        );

        if (error) {
            errors[field] = error;
        }
    });

    return errors;
};
