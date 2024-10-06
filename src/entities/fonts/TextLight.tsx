import { Text, type TextProps } from 'react-native';

import { DEFAULT_FONT_LIGHT } from '@/constants/font';

export default function TextLight({
  children,
  style,
  className,
  ...props
}: TextProps & { className?: string }) {
  return (
    <Text
      style={[style, { fontFamily: DEFAULT_FONT_LIGHT }]}
      className={`text-body1 leading-5 text-gray-500 ${className}`}
      {...props}>
      {children}
    </Text>
  );
}
