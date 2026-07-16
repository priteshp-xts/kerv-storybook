import * as React from 'react';
import { Button } from './button';
import { Field, FieldDescription, FieldLabel } from './field';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from './input-otp';

export default {
  title: 'Components/Input OTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

function BasicOtp({ disabled = false, invalid = false, maxLength = 6, pattern, separator = false }) {
  const slots = Array.from({ length: maxLength }, (_, index) => (
    <InputOTPSlot key={index} index={index} aria-invalid={invalid || undefined} />
  ));
  const splitIndex = Math.ceil(maxLength / 2);

  return (
    <InputOTP maxLength={maxLength} disabled={disabled} pattern={pattern}>
      <InputOTPGroup>{separator ? slots.slice(0, splitIndex) : slots}</InputOTPGroup>
      {separator ? <InputOTPSeparator /> : null}
      {separator ? <InputOTPGroup>{slots.slice(splitIndex)}</InputOTPGroup> : null}
    </InputOTP>
  );
}

export const Basic = {
  render: () => <BasicOtp />,
};

export const Separator = {
  render: () => <BasicOtp maxLength={6} separator />,
};

export const Disabled = {
  render: () => <BasicOtp disabled />,
};

export const Controlled = {
  render: () => {
    const [value, setValue] = React.useState('123');

    return (
      <div className="grid gap-3">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-sm text-muted-foreground">Value: {value || 'empty'}</div>
      </div>
    );
  },
};

export const Invalid = {
  render: () => (
    <BasicOtp invalid />
  ),
};

export const FourDigits = {
  render: () => (
    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} inputMode="numeric">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const Alphanumeric = {
  render: () => (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const Form = {
  render: () => (
    <form className="grid gap-4">
      <Field>
        <FieldLabel htmlFor="otp-code">Verification code</FieldLabel>
        <InputOTP id="otp-code" maxLength={6} pattern={REGEXP_ONLY_DIGITS} inputMode="numeric">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>Enter the verification code sent to your email.</FieldDescription>
      </Field>
      <div className="flex items-center justify-between gap-3">
        <Button type="button" variant="ghost">
          Resend code
        </Button>
        <Button type="submit">Verify</Button>
      </div>
    </form>
  ),
};
