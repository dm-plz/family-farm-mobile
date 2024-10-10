import { createNavigationContainerRef } from '@react-navigation/native';

import { type RouteName } from '@/constants';

export const navigationRef =
  createNavigationContainerRef<Record<RouteName, undefined>>();

export function navigate(name: RouteName) {
  if (
    navigationRef.isReady() ||
    !navigationRef.getState().routeNames.some(v => v === name)
  ) {
  }

  navigationRef.navigate(name);
}
