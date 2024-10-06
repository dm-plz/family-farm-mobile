import { Text, type TextProps } from 'react-native';

import { DEFAULT_FONT_BLACK } from '@/constants/font';

export default function TextBlack({
  children,
  style,
  className,
  ...props
}: TextProps & { className?: string }) {
  return (
    <Text
      style={[style, { fontFamily: DEFAULT_FONT_BLACK }]}
      className={`text-body1 text-gray-500 ${className}`}
      {...props}>
      {children}
    </Text>
  );
}
