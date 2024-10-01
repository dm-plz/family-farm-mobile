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
      className={`text-black text-body1 ${className}`}
      {...props}>
      {children}
    </Text>
  );
}
