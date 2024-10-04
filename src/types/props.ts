import type { ViewStyle } from 'react-native';

export interface ClassNameProps {
  className?: string;
}

export type StylingProps<T extends ViewStyle> = ClassNameProps & { style?: T };
