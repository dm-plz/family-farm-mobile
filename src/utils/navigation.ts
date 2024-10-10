import { createNavigationContainerRef } from '@react-navigation/native';

import { type RouteName } from '@/constants';

export const navigationRef =
  createNavigationContainerRef<Record<RouteName, undefined>>();

export function navigate(routeName: RouteName) {
  if (!navigationRef.isReady()) {
    throw new Error('Can not find connected navigation container.');
  }

  const { routeNames } = navigationRef.getRootState();
  if (!routeNames.find(name => name === routeName)) {
    throw new Error('Tried to navigate to an unavailable route.');
  }

  navigationRef.navigate(routeName);
}
