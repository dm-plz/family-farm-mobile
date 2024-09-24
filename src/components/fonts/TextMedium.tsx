import { Text, type TextProps } from 'react-native';

import { isIOS } from '@/utils/platform';

const FONT_FAMILY = isIOS() ? 'Pretendard-Medium' : 'PretendardMedium';

export default function TextMedium({
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
