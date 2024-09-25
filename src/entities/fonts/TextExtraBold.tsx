import { Text, type TextProps } from 'react-native';

import { DEFAULT_FONT_EXTRA_BOLD } from '@/constants/font';

export default function TextExtraBold({
  children,
  style,
  className,
  ...props
}: TextProps & { className: string }) {
  return (
    <Text
      style={[style, { fontFamily: DEFAULT_FONT_EXTRA_BOLD }]}
      className={className}
      {...props}>
      {children}
    </Text>
  );
}
