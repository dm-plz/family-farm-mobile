#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <UserNotifications/UserNotifications.h>
#import "KakaoLoginModule.h"
#import "FirebaseEventModule.h"
#import "FirebaseMessagingModule.h"
#import "FirebaseMessaginSerializer.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  
  [FIRMessaging messaging].delegate = self;
  
  // 푸시 알림 권한 요청 및 APNs 등록 코드 추가
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  center.delegate = self;  // 이제 이 줄이 올바르게 동작합니다.
  
  UNAuthorizationOptions authOptions = UNAuthorizationOptionAlert |
  UNAuthorizationOptionSound | UNAuthorizationOptionBadge;
  
  [center requestAuthorizationWithOptions:authOptions
                        completionHandler:^(BOOL granted, NSError * _Nullable error) {
    if (granted) {
      NSLog(@"Push notification permission granted.");
    } else {
      NSLog(@"Push notification permission denied.");
    }
  }];
  
  [application registerForRemoteNotifications];
  
  self.moduleName = @"FamilyFarmRN";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// Kakao URL 처리 추가
- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  if([KakaoLoginModule isKakaoTalkLoginUrl:url]) {
    return [KakaoLoginModule handleOpenUrl: url];
  }
  
  return NO;
}

// FIRMessagingDelegate 메서드 구현
// 등록 토큰을 수신할 때 호출되는 메서드
- (void)messaging:(FIRMessaging *)messaging didReceiveRegistrationToken:(NSString *)fcmToken {
  NSLog(@"FCM registration token: %@", fcmToken);
  
  // 토큰을 서버로 전송하거나 저장하는 등의 추가 작업을 수행
  [[FirebaseEventModule shared] sendEventWithName:@"messaging_token_refresh" body:@{@"token" : fcmToken}];
}

// 앱이 포그라운드에 있을 때 푸시 알림을 처리하는 메서드
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
       willPresentNotification:(UNNotification *)notification
         withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
  NSDictionary *userInfo = notification.request.content.userInfo;
  
  UNNotificationPresentationOptions presentationOptions = UNNotificationPresentationOptionNone;
  
  if (notification.request.content.userInfo[@"gcm.message_id"]) {
    NSDictionary *notificationDict = [FirebaseMessaginSerializer notificationToDict:notification];
    
    if (!notificationDict[@"contentAvailable"]) {
      [[FirebaseEventModule shared] sendEventWithName:@"messaging_message_received" body:notificationDict];
    }
    completionHandler(presentationOptions);
  }
  
  // 알림 내용 로그 출력
  NSLog(@"%@", userInfo);
  
  // 사용자에게 어떤 방식으로 알림을 표시할지 결정
//  completionHandler(UNNotificationPresentationOptionBadge | UNNotificationPresentationOptionAlert);
}

// 사용자가 알림을 클릭했을 때 호출되는 메서드
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void(^)(void))completionHandler {
  NSDictionary *userInfo = response.notification.request.content.userInfo;
  
  if (userInfo[@"gcm.message_id"]) {
    NSLog(@"Message ID: %@", userInfo[@"gcm.message_id"]);
    
    NSDictionary *notificationDict =
    [FirebaseMessaginSerializer remoteMessageUserInfoToDict:userInfo];
    
    [[FirebaseEventModule shared] sendEventWithName:@"messaging_notification_opened" body:notificationDict];
  }
  
  // 알림 내용 로그 출력
  NSLog(@"%@", userInfo);
  
  completionHandler();
}

// 앱이 백그라운드에 있을 때 푸시 알림을 처리하는 메서드
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification
  
  // With swizzling disabled you must let Messaging know about the message, for Analytics
  // [[FIRMessaging messaging] appDidReceiveMessage:userInfo];
  
  // ...
  
  // Print full message.
  NSLog(@"%@", userInfo);
  
  completionHandler(UIBackgroundFetchResultNewData);
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
