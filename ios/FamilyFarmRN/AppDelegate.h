#import <RCTAppDelegate.h>
#import <Firebase.h>
#import <UserNotifications/UserNotifications.h>

@interface AppDelegate : RCTAppDelegate<UNUserNotificationCenterDelegate, FIRMessagingDelegate>

@end
