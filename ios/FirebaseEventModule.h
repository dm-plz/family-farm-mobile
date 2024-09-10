#import <React/RCTEventEmitter.h>

@class FirebaseEventModule;

@interface FirebaseEventModule : RCTEventEmitter <RCTBridgeModule>
- (FirebaseEventModule *)returnSwiftClassInstance;
+ (FirebaseEventModule *)shared;
- (void)sendEventWithName:(NSString *)name body:(id)body;
@end
