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
      className={`text-black text-body1 ${className}`}
      {...props}>
      {children}
    </Text>
  );
}
