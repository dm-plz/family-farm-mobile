#import <RCTAppDelegate.h>
#import <Firebase.h>
#import <UserNotifications/UserNotifications.h>
#import <React/RCTLinkingManager.h>
#import "RNAppAuthAuthorizationFlowManager.h"

@interface AppDelegate : RCTAppDelegate<UNUserNotificationCenterDelegate, FIRMessagingDelegate, RNAppAuthAuthorizationFlowManager>

@property(nonatomic, weak) id<RNAppAuthAuthorizationFlowManagerDelegate> authorizationFlowManagerDelegate;

@end
