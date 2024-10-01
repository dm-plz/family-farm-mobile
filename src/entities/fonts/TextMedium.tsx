import { Text, type TextProps } from 'react-native';

import { DEFAULT_FONT_MEDIUM } from '@/constants/font';

export default function TextMedium({
  children,
  style,
  className,
  ...props
}: TextProps & { className?: string }) {
  return (
    <Text
      style={[style, { fontFamily: DEFAULT_FONT_MEDIUM }]}
      className={`text-black text-body1 ${className}`}
      {...props}>
      {children}
    </Text>
  );
}
