import { TextInput, TextInputProps, View } from 'react-native';

import { DEFAULT_FONT_REGULAR } from '@/constants/font';
import { TextRegular } from '@/entities/fonts';

export interface CustomInputProps {
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  className?: string;
}

function deriveTwClassByStatus({
  editable,
  error,
  success,
}: {
  editable?: boolean;
  error?: boolean;
  success?: boolean;
}) {
  if (editable === false) {
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
  editable,
  error,
  errorMessage,
  success,
  successMessage,
  className = '',
  style,
  ...props
}: TextInputProps & CustomInputProps) {
  if (success && error) {
    throw new Error('Cannot have both success and error');
  }

  return (
    <View className={className} style={[style]} {...props}>
      <TextInput
        className={`h-[52] rounded-xl border border-gray-25 px-5 py-4 ${deriveTwClassByStatus({ editable, error, success })} `}
        editable={editable !== false}
        style={[{ fontFamily: DEFAULT_FONT_REGULAR }]}
        placeholder="텍스트를 입력해주세요"
      />
      {error && errorMessage && (
        <TextRegular className="mt-3 text-error">{errorMessage}</TextRegular>
      )}
      {success && successMessage && (
        <TextRegular className="mt-3 text-success">
          {successMessage}
        </TextRegular>
      )}
    </View>
  );
}
