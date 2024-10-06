import { Text, type TextProps } from 'react-native';

import { DEFAULT_FONT_BOLD } from '@/constants/font';

export default function TextBold({
  children,
  style,
  className,
  ...props
}: TextProps & { className?: string }) {
  return (
    <Text
      style={[style, { fontFamily: DEFAULT_FONT_BOLD }]}
      className={`text-body1 text-gray-500 ${className}`}
      {...props}>
      {children}
    </Text>
  );
}
