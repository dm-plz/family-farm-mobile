import { Text, type TextProps } from 'react-native';

import { DEFAULT_FONT_THIN } from '@/constants/font';

export default function TextThin({
  children,
  style,
  className,
  ...props
}: TextProps & { className?: string }) {
  return (
    <Text
      style={[style, { fontFamily: DEFAULT_FONT_THIN }]}
      className={className}
      {...props}>
      {children}
    </Text>
  );
}
