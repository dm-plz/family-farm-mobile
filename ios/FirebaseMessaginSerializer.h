#import <Firebase.h>
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface FirebaseMessaginSerializer : NSObject

+ (NSData *)APNSTokenDataFromNSString:(NSString *)token;

+ (NSString *)APNSTokenFromNSData:(NSData *)tokenData;

+ (NSDictionary *)notificationToDict:(UNNotification *)notification;

+ (NSDictionary *)remoteMessageUserInfoToDict:(NSDictionary *)userInfo;

@end
