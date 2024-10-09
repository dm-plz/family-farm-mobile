import { TextInput, TextInputProps, View } from 'react-native';

import { DEFAULT_FONT_REGULAR } from '@/constants/font';
import { TextRegular } from '@/entities/fonts';

export interface CustomInputProps {
  disable?: boolean;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  className?: string;
}

function deriveTwClassByStatus({
  disable: disable,
  error,
  success,
}: {
  disable?: boolean;
  error?: boolean;
  success?: boolean;
}) {
  if (disable === false) {
    return 'bg-gray-100';
  }

  if (error) {
    return 'border-error bg-error/5';
  }

  if (success) {
    return 'border-success bg-success/5';
  }

  return '';
}

export default function CustomInput({
  disable,
  error,
  errorMessage,
  success,
  successMessage,
  className,
  style,
  placeholder = '',
  ...props
}: TextInputProps & CustomInputProps) {
  if (success && error) {
    throw new Error('Cannot have both success and error');
  }

  return (
    <View className={className} style={[style]}>
      <TextInput
        className={`h-[52] rounded-xl border border-gray-100 px-5 py-4 ${deriveTwClassByStatus({ disable, error, success })} `}
        style={[{ fontFamily: DEFAULT_FONT_REGULAR }]}
        placeholder={placeholder}
        {...props}
      />
      {!disable && error && errorMessage && (
        <TextRegular className="mt-3 text-body3 leading-3 text-error">
          {errorMessage}
        </TextRegular>
      )}
      {!disable && success && successMessage && (
        <TextRegular className="mt-3 text-body3 leading-3 text-success">
          {successMessage}
        </TextRegular>
      )}
    </View>
  );
}
