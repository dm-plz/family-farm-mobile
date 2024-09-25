import { Text, type TextProps } from 'react-native';

import { isIOS } from '@/utils/platform';

const FONT_FAMILY = isIOS() ? 'Pretendard-Black' : 'PretendardBlack';

export default function TextBlack({
  children,
  style,
  className,
  ...props
}: TextProps & { className: string }) {
  return (
    <Text
      style={[style, { fontFamily: FONT_FAMILY }]}
      className={className}
      {...props}>
      {children}
    </Text>
  );
}
