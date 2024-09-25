import { TextInput, TextInputProps, View } from 'react-native';

import { DEFAULT_FONT_REGULAR } from '@/constants/font';
import { TextRegular } from '@/entities/fonts';

export interface InputFieldProps {
  disable?: boolean;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  className?: string;
}

function deriveTwClassByStatus({
  disable,
  error,
  success,
}: Omit<InputFieldProps, 'errorMessage' | 'successMessage'>) {
  if (disable) {
    return '';
  }

  if (error) {
    return 'border-error bg-error/5';
  }

  if (success) {
    return 'border-success bg-success/5';
  }

  return '';
}

export default function InputField({
  disable,
  editable,
  error,
  errorMessage,
  success,
  successMessage,
  className = '',
  style,
  ...props
}: TextInputProps & InputFieldProps) {
  if (success && error) {
    throw new Error('Cannot have both success and error');
  }

  return (
    <View>
      <TextInput
        className={`border-gray-25 h-[52] rounded-xl border bg-gray-100 px-5 py-4 ${deriveTwClassByStatus({ disable, error, success })} ${className}`}
        editable={!disable && editable !== false}
        style={[{ fontFamily: DEFAULT_FONT_REGULAR }, style]}
        placeholder="텍스트를 입력해주세요"
        {...props}
      />
      {error && errorMessage && (
        <TextRegular className="text-error mt-4">{errorMessage}</TextRegular>
      )}
      {success && successMessage && (
        <TextRegular className="text-success mt-4">
          {successMessage}
        </TextRegular>
      )}
    </View>
  );
}
