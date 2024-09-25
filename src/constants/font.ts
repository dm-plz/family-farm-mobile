import { isIOS } from '@/utils/platform';

export const DEFAULT_FONT_BLACK = isIOS()
  ? 'Pretendard-Black'
  : 'PretendardBlack';

export const DEFAULT_FONT_BOLD = isIOS() ? 'Pretendard-Bold' : 'PretendardBold';

export const DEFAULT_FONT_EXTRA_BOLD = isIOS()
  ? 'Pretendard-ExtraBold'
  : 'PretendardExtraBold';

export const DEFAULT_FONT_EXTRA_LIGHT = isIOS()
  ? 'Pretendard-ExtraLight'
  : 'PretendardExtraLight';

export const DEFAULT_FONT_LIGHT = isIOS()
  ? 'Pretendard-Light'
  : 'PretendardLight';

export const DEFAULT_FONT_MEDIUM = isIOS()
  ? 'Pretendard-Medium'
  : 'PretendardMedium';

export const DEFAULT_FONT_REGULAR = isIOS()
  ? 'Pretendard-Regular'
  : 'PretendardRegular';

export const DEFAULT_FONT_SEMI_BOLD = isIOS()
  ? 'Pretendard-SemiBold'
  : 'PretendardSemiBold';

export const DEFAULT_FONT_THIN = isIOS() ? 'Pretendard-Thin' : 'PretendardThin';
