import { Text, type TextProps } from 'react-native';

import { isIOS } from '@/utils/platform';

const FONT_FAMILY = isIOS() ? 'Pretendard-Bold' : 'PretendardBold';

export default function TextBold({ children, style }: TextProps) {
  return <Text style={[style, { fontFamily: FONT_FAMILY }]}>{children}</Text>;
}
