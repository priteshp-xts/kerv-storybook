import * as React from 'react';
import { cn } from '../../lib/utils';

const REGEXP_ONLY_DIGITS = /^[0-9]$/;
const REGEXP_ONLY_DIGITS_AND_CHARS = /^[0-9a-zA-Z]$/;

const InputOTPContext = React.createContext(null);

function stripGlobalFlag(pattern) {
  if (!(pattern instanceof RegExp)) {
    return null;
  }

  return new RegExp(pattern.source, pattern.flags.replace('g', ''));
}

function getPattern(pattern) {
  if (!pattern) {
    return null;
  }

  return stripGlobalFlag(pattern) ?? null;
}

function normalizeValue(value, maxLength, pattern) {
  const chars = Array.from(String(value ?? ''));
  const filtered = pattern ? chars.filter((char) => pattern.test(char)) : chars;

  return filtered.join('').slice(0, maxLength);
}

function insertCharsAt(value, index, chars, maxLength) {
  const next = Array.from(value.padEnd(maxLength, ''));

  for (let offset = 0; offset < chars.length && index + offset < maxLength; offset += 1) {
    next[index + offset] = chars[offset];
  }

  return next.join('').slice(0, maxLength);
}

function getVisibleChar(value, index) {
  return value[index] ?? '';
}

const InputOTP = React.forwardRef(
  (
    {
      className,
      children,
      value: valueProp,
      defaultValue = '',
      onChange,
      maxLength = 6,
      disabled = false,
      pattern,
      inputMode = 'text',
      autoComplete = 'one-time-code',
      ...props
    },
    ref,
  ) => {
    const isControlled = valueProp !== undefined;
    const allowedPattern = getPattern(pattern);
    const [uncontrolledValue, setUncontrolledValue] = React.useState(() =>
      normalizeValue(defaultValue, maxLength, allowedPattern),
    );
    const value = normalizeValue(
      isControlled ? valueProp : uncontrolledValue,
      maxLength,
      allowedPattern,
    );
    const slotsRef = React.useRef([]);

    const setValue = React.useCallback(
      (nextValue) => {
        const normalized = normalizeValue(nextValue, maxLength, allowedPattern);

        if (!isControlled) {
          setUncontrolledValue(normalized);
        }

        onChange?.(normalized);
      },
      [allowedPattern, isControlled, maxLength, onChange],
    );

    const focusSlot = React.useCallback((index) => {
      slotsRef.current[index]?.focus();
    }, []);

    const context = React.useMemo(
      () => ({
        allowedPattern,
        autoComplete,
        disabled,
        focusSlot,
        inputMode,
        maxLength,
        setValue,
        slotsRef,
        value,
      }),
      [allowedPattern, autoComplete, disabled, focusSlot, inputMode, maxLength, setValue, value],
    );

    return (
      <InputOTPContext.Provider value={context}>
        <div
          ref={ref}
          className={cn('inline-flex items-center gap-2', className)}
          {...props}
        >
          {children}
        </div>
      </InputOTPContext.Provider>
    );
  },
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('inline-flex items-center gap-2', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSeparator = React.forwardRef(({ className, children = '-', ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-hidden="true"
    className={cn('mx-1 flex h-10 items-center justify-center text-sm text-muted-foreground', className)}
    {...props}
  >
    {children}
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const context = React.useContext(InputOTPContext);

  if (!context) {
    throw new Error('InputOTPSlot must be used within InputOTP.');
  }

  const {
    allowedPattern,
    autoComplete,
    disabled,
    focusSlot,
    inputMode,
    maxLength,
    setValue,
    slotsRef,
    value,
  } = context;
  const slotValue = getVisibleChar(value, index);
  const inputRef = React.useRef(null);

  React.useImperativeHandle(ref, () => inputRef.current);

  React.useEffect(() => {
    slotsRef.current[index] = inputRef.current;

    return () => {
      if (slotsRef.current[index] === inputRef.current) {
        slotsRef.current[index] = null;
      }
    };
  }, [index, slotsRef]);

  const handleChange = (event) => {
    const rawValue = event.target.value;
    const nextChars = Array.from(rawValue).filter((char) =>
      allowedPattern ? allowedPattern.test(char) : true,
    );

    if (!nextChars.length) {
      const next = insertCharsAt(value, index, [''], maxLength);
      setValue(next);
      return;
    }

    const next = insertCharsAt(value, index, nextChars.slice(0, maxLength - index), maxLength);
    setValue(next);

    focusSlot(Math.min(index + 1, maxLength - 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' && !slotValue) {
      event.preventDefault();
      focusSlot(Math.max(index - 1, 0));
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusSlot(Math.max(index - 1, 0));
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusSlot(Math.min(index + 1, maxLength - 1));
    }
  };

  const handlePaste = (event) => {
    const pastedValue = event.clipboardData.getData('text');
    const pastedChars = Array.from(pastedValue).filter((char) =>
      allowedPattern ? allowedPattern.test(char) : true,
    );

    if (!pastedChars.length) {
      return;
    }

    event.preventDefault();
    const next = insertCharsAt(value, index, pastedChars, maxLength);
    setValue(next);
    focusSlot(Math.min(index + pastedChars.length, maxLength - 1));
  };

  return (
    <input
      ref={inputRef}
      value={slotValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      inputMode={inputMode}
      autoComplete={autoComplete}
      disabled={disabled}
      maxLength={1}
      aria-invalid={props['aria-invalid']}
      aria-label={`OTP character ${index + 1}`}
      className={cn(
        'flex h-10 w-10 rounded-md border border-input bg-background text-center text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props['aria-invalid'] ? 'border-destructive focus-visible:ring-destructive' : null,
        className,
      )}
      {...props}
    />
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
};
