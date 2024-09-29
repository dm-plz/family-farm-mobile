import { Text, type TextProps } from 'react-native';

import { DEFAULT_FONT_SEMI_BOLD } from '@/constants/font';

export default function TextSemiBold({
  children,
  style,
  className,
  ...props
}: TextProps & { className?: string }) {
  return (
    <Text
      style={[style, { fontFamily: DEFAULT_FONT_SEMI_BOLD }]}
      className={className}
      {...props}>
      {children}
    </Text>
  );
}
